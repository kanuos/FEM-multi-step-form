<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import { formMetadata, MyPlan, addOnMetadata } from "../data";
  import type { BillingFrequencyType, PlanType } from "../ts-support";
  import FormLayout from "./FormLayout.svelte";

  // props
  export let billingFrequency: BillingFrequencyType;
  export let selectedAddOns: string[];
  export let plan: PlanType = "arcade";

  const dispatch = createEventDispatcher();
  const userPlan = new MyPlan(plan).getPlanDetail();
  const { short } = MyPlan.getBillingFactor(billingFrequency);

  $: isMonthly = billingFrequency === "monthly";
  $: planValue = isMonthly ? userPlan.monthly : userPlan.yearly;
  $: selectedAddOnValues = addOnMetadata
    .filter((el) => selectedAddOns.includes(el.heading))
    .map((el) => ({
      addOn: el.heading,
      value: isMonthly ? el.monthly : el.yearly,
    }));

  $: total =
    planValue + selectedAddOnValues.reduce((prev, cur) => prev + cur.value, 0);

  // callback
  function handleChangeBillingFrequency() {
    dispatch("change-billing-frequency");
  }
</script>

<FormLayout heading={formMetadata[3].heading} desc={formMetadata[3].desc}>
  <div
    slot="form-body"
    class="flex flex-col items-start justify-start gap-5 w-full mt-6"
  >
    <section class="bg-primary-4/20 rounded-md w-full p-2">
      <!-- plan -->
      <section
        class="flex items-center justify-between w-full px-2 py-3 border-b border-neutral-2/50"
      >
        <div class="flex flex-col items-start justify-start">
          <strong class="capitalize text-primary-1 font-bold">
            {plan} ({billingFrequency})
          </strong>
          <button
            type="button"
            on:click={handleChangeBillingFrequency}
            class="outline-none focus:outline-none text-neutral-1 hover:underline"
            >Change</button
          >
        </div>
        <strong class="text-primary-1">
          ${planValue}/{short}
        </strong>
      </section>
      <!-- add ons -->
      {#if selectedAddOns.length > 0}
        <section
          class="flex flex-col items-stretch justify-start w-full px-2 py-3 gap-y-2"
        >
          {#each selectedAddOnValues as { addOn, value } (addOn)}
            <div class="flex items-center justify-between">
              <span class="capitalize text-neutral-1">
                {addOn}
              </span>
              <span class="text-primary-1 font-medium text-xs">
                +${value}/{short}
              </span>
            </div>
          {/each}
        </section>
      {:else}
        <p class="capitalize text-neutral-1 text-sm px-2 py-3">
          No add-ons selected
        </p>
      {/if}
    </section>
    <p class="flex items-center justify-between w-full px-3 py-4">
      <span class="text-neutral-1">
        Total (per {isMonthly ? "month" : "year"})
      </span>
      <strong class="text-primary-1 font-bold text-lg">
        ${total}/{short}
      </strong>
    </p>
  </div>
</FormLayout>
