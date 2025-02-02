<script lang="ts">
    import HeroiconsBars3 from '~icons/heroicons/bars-3'
    import HeroiconsXMark from '~icons/heroicons/x-mark'
    import EncryptedEmail from './EncryptedEmail.svelte'

    type Props = { class?: string; links: { title: string; href: string }[] }
    const { class: className = '', links }: Props = $props()

    let open = $state(false)

    $effect(() => {
        document.body.style.overflow = open ? 'hidden' : ''
    })

    function toggle() {
        open = !open
    }

    let mobileNavContainer: HTMLDivElement
</script>

<svelte:body
    onclick={open
        ? (event) => {
              const withinBoundaries = event
                  .composedPath()
                  .includes(mobileNavContainer)

              if (!withinBoundaries) {
                  open = false
              }
          }
        : null}
/>

<div class={className} bind:this={mobileNavContainer}>
    <button
        class="flex items-center gap-2 rounded-md px-2 py-1.5 pl-3 text-lg hover:bg-[#fff2] xs:text-xl"
        onclick={toggle}
    >
        {#if open}<HeroiconsXMark />{:else}<HeroiconsBars3 />{/if}
    </button>

    <div
        class:hidden={!open}
        class="fixed bottom-0 left-0 right-0 top-16 z-30 bg-sky-200 pt-16 sm:pt-32"
        onclickcapture={() => {
            toggle()
        }}
    >
        <nav class="flex flex-col items-center justify-center p-4 text-2xl">
            {#each links as { href, title }}
                <a {href} class="link p-4">{title}</a>
            {/each}
            <EncryptedEmail class="mt-8" />
        </nav>
    </div>
</div>

<style lang="postcss">
    nav {
        @apply overflow-auto;
        scrollbar-gutter: stable both-edges;
    }
    .link {
        @apply relative font-bold no-underline;
    }
    .link:after {
        content: '';
        @apply absolute bottom-3 left-0 right-0 mx-auto h-0.5 w-1/2 transition-all duration-300;
    }
    .link:hover:after {
        @apply w-4/5 bg-green-500;
    }
</style>
