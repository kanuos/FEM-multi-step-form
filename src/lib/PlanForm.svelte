<script lang="ts">
  import { formMetadata } from "../data";
  import type { BillingFrequencyType, PlanType } from "../ts-support";
  import FormLayout from "./FormLayout.svelte";
  import FrequencyToggler from "./FrequencyToggler.svelte";
  import PlanButton from "./PlanButton.svelte";

  export let selectedPlan: PlanType;
  export let billingFrequency: BillingFrequencyType;

  // props
</script>

<FormLayout heading={formMetadata[1].heading} desc={formMetadata[1].desc}>
  <div
    slot="form-body"
    class="flex flex-col items-start justify-start gap-5 w-full mt-6"
  >
    <div class="grid grid-cols-1 md:grid-cols-3 gap-3 w-full">
      <PlanButton plan="arcade" bind:selectedPlan bind:billingFrequency />
      <PlanButton plan="advanced" bind:selectedPlan bind:billingFrequency />
      <PlanButton plan="pro" bind:selectedPlan bind:billingFrequency />
    </div>
    <FrequencyToggler on:toggle-frequency bind:frequncy={billingFrequency} />
  </div>
</FormLayout>
