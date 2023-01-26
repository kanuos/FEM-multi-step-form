<script lang="ts">
  export let heading: string;
  export let desc: string;
</script>

<article
  class="bg-neutral-5 w-11/12 max-w-sm mx-auto py-10 px-6 min-h-[60vh] md:min-h-[50vh] rounded-lg drop-shadow-lg md:max-w-md md:drop-shadow-none md:py-8 md:px-0"
>
  <div class="flex flex-col items-start justify-start gap-3">
    <h2 class="font-bold text-primary-1 text-3xl">
      {heading}
    </h2>
    <p class="text-neutral-1">
      {desc}
    </p>
  </div>
  <slot name="form-body" />
</article>


<style>
    article {
        transform: translateY(-4rem);
    }
    
    @media screen and (min-width:375px) {
        article {
            transform: translateY(-2.5rem);
        }
    }
    
    @media screen and (min-width:390px) {
        article {
            transform: translateY(-6rem);
        }
    }
    
    @media screen and (min-width:400px) {
        article {
            transform: translateY(-7.5rem);
        }
    }
    
    @media screen and (min-width:500px) {
        article {
            transform: translateY(-3rem);
        }
    }
    
    @media screen and (min-width:768px) {
        article {
            transform: translateY(0rem);
        }
    }
</style>