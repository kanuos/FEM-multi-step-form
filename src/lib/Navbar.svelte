<script lang="ts">
  import NavButtons from "./NavButtons.svelte";
  // props
  export let showBtns = true;
  export let currentStepIndex = 0;
  export let maxSteps: number;
</script>

{#if showBtns}
  {#if currentStepIndex !== 0}
    <li class="col-start-1 col-end-2 grid place-items-start">
      <NavButtons on:handle-click type="back" />
    </li>
  {/if}
  {#if currentStepIndex === maxSteps}
    <li class="col-start-2 col-end-3 grid place-items-end">
      <NavButtons on:handle-click type="confirm" />
    </li>
  {:else}
    <li class="col-start-2 col-end-3 grid place-items-end">
      <NavButtons on:handle-click type="next" />
    </li>
  {/if}
{/if}
