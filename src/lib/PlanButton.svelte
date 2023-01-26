<script lang="ts">
  import { fade } from "svelte/transition";
  import type { BillingFrequencyType, PlanType } from "../ts-support";
  import { MyPlan } from "../data";
  // props
  export let plan: PlanType;
  export let billingFrequency: BillingFrequencyType = "yearly";
  export let selectedPlan: PlanType;

  // reactive data
  $: planObj = new MyPlan(plan);
  $: planData = planObj.getPlanDetail();
  $: billSchedule = planObj.getBillingFactor(billingFrequency);
  $: isSelected = plan === selectedPlan;
</script>

<input
  type="radio"
  name="plan"
  value={plan}
  class="hidden pointer-events-none"
  id={plan}
  bind:group={selectedPlan}
/>
<label
  for={plan}
  class="flex gap-4 items-center w-full p-4 border-2 rounded-lg cursor-pointer md:flex-col md:items-start md:gap-y-8 transition-all
  {isSelected
    ? 'border-primary-2/50 bg-primary-3/5'
    : 'border-neutral-1/20 bg-[transparent] hover:border-primary-2/40'}"
>
  <img src={planData.image} alt={planData.plan} />
  <div class="flex flex-col items-start">
    <strong class="capitalize font-semibold text-primary-1">
      {planData.plan}
    </strong>
    <span class="text-neutral-1 text-sm font-medium">
      ${planData.monthly * billSchedule.factor}/{billSchedule.short}
    </span>
    {#if billingFrequency === "yearly"}
      <small transition:fade class="text-primary-1 font-medium tracking-tight">
        2 months free
      </small>
    {/if}
  </div>
</label>
