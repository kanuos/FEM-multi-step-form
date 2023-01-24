<script lang="ts">
  // component props
  export let step: { count: number; label: string };
  export let currentStepIndex: number;

  //   destructure the props.step
  const { count, label } = step;

  // reactive isActive that updates whenever the bound currentStepIndex updates
  $: isActive = count === currentStepIndex;
</script>

<li
  class="flex items-center justify-start gap-x-3.5 pointer-events-none select-none"
>
  <div
    class="inline-grid place-items-center h-8 w-8 text-sm border-2 font-bold rounded-full {isActive
      ? 'bg-primary-4 text-primary-1 border-primary-4'
      : 'text-neutral-2 border-neutral-2'}"
  >
    {count + 1}
  </div>
  <p class="hidden md:flex flex-col items-start uppercase text-sm">
    <span class="text-neutral-2">
      <small>
        step {count + 1}
      </small>
    </span>
    <span class="text-neutral-3 font-bold tracking-wider">
      {label}
    </span>
  </p>
</li>
