<div class="w-full h-auto bg-neutral-3 min-h-screen grid place-items-center">
  <main
    class="grid grid-cols-1 grid-flow-row w-full h-full md:h-auto md:w-11/12 max-w-4xl mx-auto 
    md:grid-cols-3 md:grid-rows-6 md:rounded-lg md:p-2 lg:p-4 md:bg-neutral-5 md:drop-shadow-2xl md:gap-1"
  >
    <aside
      aria-label="sidebar"
      class="relative w-full col-span-full row-start-1 h-36 md:col-span-1 md:row-end-7 md:h-full block md:rounded-md"
    >
      <slot name="step" />
    </aside>

    <section
      aria-label="content"
      class="h-fit md:col-start-2 md:col-end-4 md:row-start-1 md:row-end-6 w-full"
    >
      <slot name="form" />
    </section>

    <nav
      class="mt-auto md:col-start-2 md:col-end-4 md:row-start-6 md:row-end-7 w-full h-fit md:h-full"
      aria-label="navbar"
    >
      <slot name="nav" />
    </nav>
  </main>
</div>

<style>
  aside {
    background-image: url(../assets/bg-sidebar-mobile.svg);
    background-size: cover;
    background-position: center;
  }

  @media screen and (min-width: 768px) {
    aside {
      background-image: url(../assets/bg-sidebar-desktop.svg);
    }
  }
</style>
