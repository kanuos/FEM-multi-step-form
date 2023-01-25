<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import type { NavButtonType } from "../ts-support";
  export let type: NavButtonType;

  const dispatch = createEventDispatcher();

  function handleClickBtn() {
    dispatch("handle-click", {
      type,
    });
  }
</script>

{#if type === "confirm"}
  <button
    on:click={handleClickBtn}
    type="submit"
    class="text-neutral-3 bg-primary-2">Confirm</button
  >
{:else if type === "next"}
  <button
    on:click={handleClickBtn}
    type="button"
    class="text-neutral-3 bg-primary-1 hover:bg-opacity-95">Next Step</button
  >
{:else}
  <button
    on:click={handleClickBtn}
    type="button"
    class="text-neutral-1 hover:text-primary-1 bg-[transparent]">Go Back</button
  >
{/if}

<style>
  button {
    @apply px-5 py-2.5 outline-none font-medium transition-all rounded-md text-sm tracking-wide;
  }

  button:focus {
    @apply outline-none;
  }
</style>
