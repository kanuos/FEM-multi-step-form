<script lang="ts">
  import { formMetadata, addOnMetadata, MyPlan } from "../data";
  import type { BillingFrequencyType } from "../ts-support";
  import FormLayout from "./FormLayout.svelte";

  // props
  export let billingFrequency: BillingFrequencyType;
  export let selectedAddOns: string[];
</script>

<FormLayout heading={formMetadata[2].heading} desc={formMetadata[2].desc}>
  <div
    slot="form-body"
    class="flex flex-col items-start justify-start gap-5 w-full mt-6"
  >
    <div class="flex flex-col items-stretch justify-start gap-3 w-full">
      {#each addOnMetadata as addOn, i (i)}
        <label
          for={addOn.heading}
          class="border-2 rounded-lg p-3 flex items-center justify-between gap-3 cursor-pointer 
          {selectedAddOns.includes(addOn.heading)
            ? 'bg-primary-3/10 border-primary-2/75'
            : 'border-neutral-1/25'}"
        >
          <input
            id={addOn.heading}
            type="checkbox"
            name="addOn"
            bind:group={selectedAddOns}
            value={addOn.heading}
            class=" accent-neutral-1 opacity-50 checked:opacity-100 h-5 w-5 shrink-0 checked:accent-primary-2 rounded-md"
          />
          <p class="flex flex-col items-start flex-grow">
            <strong class="text-primary-1">
              {addOn.heading}
            </strong>
            <span class="text-neutral-1 text-sm">
              {addOn.desc}
            </span>
          </p>

          <span class="text-primary-2 text-sm font-medium">
            +${addOn.monthly}/{MyPlan.getBillingFactor(billingFrequency).short}
          </span>
        </label>
      {/each}
    </div>
  </div>
</FormLayout>
