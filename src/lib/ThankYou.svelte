<script lang="ts">
  import icon from "../assets/icon-thank-you.svg";
  import FormLayout from "./FormLayout.svelte";
</script>

<FormLayout heading="" desc="">
  <div
    slot="form-body"
    class="flex flex-col items-center justify-center gap-5 w-full h-[50vh]"
  >
    <img src={icon} alt="" />
    <h2 class="font-bold capitalize text-2xl text-primary-1">Thank you!</h2>
    <p class="text-neutral-1/90 text-center font-medium px-4">
      Thanks for confirming your subscription! We hope you have fun using our
      platform. If you ever need support, please feel free to email us at
      support@loremgaming.com
    </p>
  </div>
</FormLayout>
