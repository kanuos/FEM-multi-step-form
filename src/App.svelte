<script lang="ts">
  import PageLayout from "./lib/PageLayout.svelte";
  import { steps } from "./data";
  import Step from "./lib/Step.svelte";
  import Navbar from "./lib/Navbar.svelte";
  import InfoForm from "./lib/InfoForm.svelte";
  import type {
    BillingFrequencyType,
    NavButtonType,
    PlanType,
  } from "./ts-support";
  import { UserValidator } from "./helper";
  import PlanForm from "./lib/PlanForm.svelte";
  import AddOnSelector from "./lib/AddOnSelector.svelte";
  import Checkout from "./lib/Checkout.svelte";
  import ThankYou from "./lib/ThankYou.svelte";

  // reactive state
  $: currentStepIndex = 0;
  $: showBtns = true;
  $: formData = {
    user: {
      name: "",
      email: "",
      phone: "",
    },
    plan: "arcade" as PlanType,
    billingFrequency: "monthly" as BillingFrequencyType,
    addOns: [],
  };

  $: errors = {
    name: "",
    email: "",
    phone: "",
  };

  $: formSubmitted = false;

  // callback functions
  function stepForward() {
    currentStepIndex = Math.min(currentStepIndex + 1, steps.length - 1);
  }

  function stepBackward() {
    currentStepIndex = Math.max(currentStepIndex - 1, 0);
  }

  function resetErrors() {
    errors = {
      name: "",
      email: "",
      phone: "",
    };
  }

  function handleClickBtn({ detail }) {
    const { type }: { type: NavButtonType } = detail;
    // check if type is back
    if (type === "back") {
      stepBackward();
      return;
    }

    // First section and the user clicks the next button
    if (type === "next") {
      if (currentStepIndex === 0) {
        // validate personal info using the validator
        const { error } = UserValidator.validate(formData.user);
        if (error) {
          const {
            message,
            context: { label: field },
          } = error.details[0];
          errors[field] = message;

          const t = setTimeout(resetErrors, 1500);
          return () => clearTimeout(t);
        }
        // valid form data hence remove all errors (if they exist)
        resetErrors();
      }
      stepForward();
    }
    console.log(type, formData);
  }

  function handleSubmitForm() {
    formSubmitted = true;
  }

  function toggleBillingFrequency() {
    formData.billingFrequency =
      formData.billingFrequency === "monthly" ? "yearly" : "monthly";
  }
</script>

<form on:submit|preventDefault={handleSubmitForm}>
  <PageLayout>
    <ul
      slot="step"
      class="flex items-center justify-center gap-4 h-full w-full md:flex-col md:items-start md:justify-start
   md:px-6 md:pt-10 md:gap-y-8"
    >
      {#each steps as label, i (i)}
        <Step
          step={{
            count: i,
            label,
          }}
          bind:currentStepIndex
        />
      {/each}
    </ul>
    <div slot="form">
      {#if !formSubmitted}
        {#if currentStepIndex === 0}
          <InfoForm bind:user={formData.user} bind:errors />
        {:else if currentStepIndex === 1}
          <PlanForm
            bind:selectedPlan={formData.plan}
            bind:billingFrequency={formData.billingFrequency}
            on:toggle-frequency={toggleBillingFrequency}
          />
        {:else if currentStepIndex === 2}
          <AddOnSelector
            bind:selectedAddOns={formData.addOns}
            bind:billingFrequency={formData.billingFrequency}
          />
        {:else if currentStepIndex === 3}
          <Checkout
            bind:plan={formData.plan}
            bind:selectedAddOns={formData.addOns}
            bind:billingFrequency={formData.billingFrequency}
            on:change-billing-frequency={toggleBillingFrequency}
          />
        {/if}
      {:else}
        <ThankYou />
      {/if}
    </div>
    <ul
      slot="nav"
      class="h-full w-full mx-auto flex items-center justify-center {showBtns
        ? 'bg-neutral-5'
        : ''}"
    >
      {#if !formSubmitted}
        <div
          class="w-11/12 py-3  max-w-sm md:max-w-md mx-auto grid grid-cols-2"
        >
          <Navbar
            on:handle-click={handleClickBtn}
            maxSteps={steps.length - 1}
            {currentStepIndex}
            {showBtns}
          />
        </div>
      {/if}
    </ul>
  </PageLayout>
</form>
