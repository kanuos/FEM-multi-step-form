<script lang="ts">
  import PageLayout from "./lib/PageLayout.svelte";
  import { steps } from "./data";
  import Step from "./lib/Step.svelte";
  import Navbar from "./lib/Navbar.svelte";

  // reactive state
  $: currentStepIndex = 0;
  $: showBtns = true;
  // callback functions
  function stepForward() {
    currentStepIndex = Math.min(currentStepIndex + 1, steps.length - 1);
  }

  function stepBackward() {
    currentStepIndex = Math.max(currentStepIndex - 1, 0);
  }

  function handleClickBtn({ detail: { type } }) {
    console.log(type);
  }
</script>

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
  <ul
    slot="nav"
    class="h-full grid grid-cols-2 {showBtns ? 'bg-neutral-5 p-6' : ''}"
  >
    <Navbar
      on:handle-click={handleClickBtn}
      maxSteps={steps.length - 1}
      {currentStepIndex}
      {showBtns}
    />
  </ul>
</PageLayout>
