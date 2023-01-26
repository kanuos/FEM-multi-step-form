<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import type { BillingFrequencyType } from "../ts-support";

  //   props
  export let frequncy: BillingFrequencyType = "monthly";

  //   reactive
  $: isMonthly = frequncy === "monthly";

  const dispatch = createEventDispatcher();

  function handleToggleFrequency() {
    dispatch("toggle-frequency");
  }
</script>

<section
  class="bg-neutral-4 capitalize text-sm font-medium p-3 rounded-md w-full 
  flex items-center justify-center gap-4"
>
  <span class={isMonthly ? "text-primary-1" : "text-neutral-1"}> monthly </span>
  <button
    type="button"
    on:click={handleToggleFrequency}
    class="w-10 h-5 p-1.5 flex items-center rounded-full bg-primary-1 transition-all
     {isMonthly ? 'justify-start' : 'justify-end'}"
  >
    <span class="block h-3.5 w-3.5 rounded-full bg-neutral-5" />
  </button>
  <span class={!isMonthly ? "text-primary-1" : "text-neutral-1"}> yearly </span>
</section>
