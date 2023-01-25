<script lang="ts">
  import { formMetadata } from "../data";
  import FormLayout from "./FormLayout.svelte";
  import Input from "./Input.svelte";

  // props
  export let user   : { name: string; email: string; phone: string };
  export let errors : { name: string; email: string; phone: string };
</script>

<FormLayout heading={formMetadata[0].heading} desc={formMetadata[0].desc}>
  <div slot="form-body" class="flex flex-col items-start justify-start gap-5 w-full mt-6">
    <Input
      label="name"
      placeholder="e.g. Stephen King"
      bind:value={user.name}
      bind:error={errors.name}
    />
    <Input
      label="email address"
      placeholder="e.g. stephenking@lorem.com"
      bind:value={user.email}
      bind:error={errors.email}
    />
    <Input
      label="phone number"
      placeholder="e.g. +1 234 567 890"
      bind:value={user.phone}
      bind:error={errors.phone}
    />
  </div>
</FormLayout>
