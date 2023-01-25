<script lang="ts">
  export let label: string;
  export let placeholder: string;
  export let value: string;
  export let error: string;
</script>

<section class="flex flex-col items-start justify-start gap-1 w-full">
  <p class="flex items-center justify-between w-full">
    <label for={label} class="text-primary-1 font-medium capitalize text-sm">
      {label}
    </label>
    <span class="text-primary-5 font-bold capitalize text-xs">
      {error}
    </span>
  </p>
  <input
    autocomplete="off"
    bind:value
    {placeholder}
    id={label}
    class="outline-none focus:outline-none px-2.5 py-2 border w-full block {Boolean(
      error
    )
      ? 'border-primary-5'
      : 'border-neutral-2'}
    focus:border-primary-1 rounded transition-all text-primary-1 placeholder:font-normal font-medium"
  />
</section>
