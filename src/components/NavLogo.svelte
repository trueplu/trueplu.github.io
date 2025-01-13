<script lang="ts">
    type Props = { href: string; class?: string }
    const { href = '', class: className = '' }: Props = $props()

    function clearHash(event: MouseEvent) {
        event.preventDefault()
        window.history.pushState('', '', '/')
        window.scrollTo(0, 0)
    }
</script>
