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

  // reactive state
  $: currentStepIndex = 1;
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

    // user clicked next/confirm

    // First section and the user clicks the next button
    if (currentStepIndex === 0 && type === "next") {
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
      // step forward to the next slot
      stepForward();
    }
    console.log(type, formData);
  }

  function toggleBillingFrequency() {
    formData.billingFrequency =
      formData.billingFrequency === "monthly" ? "yearly" : "monthly";
  }
</script>

<form>
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
      {#if currentStepIndex === 0}
        <InfoForm bind:user={formData.user} bind:errors />
      {:else if currentStepIndex === 1}
        <PlanForm
          bind:selectedPlan={formData.plan}
          bind:billingFrequency={formData.billingFrequency}
          on:toggle-frequency={toggleBillingFrequency}
        />
      {/if}
    </div>
    <ul
      slot="nav"
      class="h-full w-full mx-auto flex items-center justify-center {showBtns
        ? 'bg-neutral-5'
        : ''}"
    >
      <div class="w-11/12 py-3  max-w-sm md:max-w-md mx-auto grid grid-cols-2">
        <Navbar
          on:handle-click={handleClickBtn}
          maxSteps={steps.length - 1}
          {currentStepIndex}
          {showBtns}
        />
      </div>
    </ul>
  </PageLayout>
</form>
