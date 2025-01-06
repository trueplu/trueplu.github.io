<script lang="ts" module>
    import { base64 } from 'rfc4648'

    let decrypted: Promise<string> | undefined = undefined

    const pl = import.meta.env.PUBLIC_PAYLOAD
    const pwd = import.meta.env.PUBLIC_PASSWORD

    if (!pl || !pwd) throw new Error('EncryptedEmail.svelte: Missing data')

    async function deriveKey(salt: Uint8Array, password: string) {
        const encoder = new TextEncoder()
        const baseKey = await crypto.subtle.importKey(
            'raw',
            encoder.encode(password),
            'PBKDF2',
            false,
            ['deriveKey'],
        )
        return await crypto.subtle.deriveKey(
            { name: 'PBKDF2', salt, iterations: 2e5, hash: 'SHA-256' },
            baseKey,
            { name: 'AES-GCM', length: 256 },
            false,
            ['decrypt'],
        )
    }

    async function decrypt(pl: string, password: string) {
        const decoder = new TextDecoder()

        const bytes = base64.parse(pl)
        const salt = bytes.slice(0, 32)
        const iv = bytes.slice(32, 32 + 16)
        const ciphertext = bytes.slice(32 + 16)

        const key = await deriveKey(salt, password)

        const data = new Uint8Array(
            await crypto.subtle.decrypt(
                { name: 'AES-GCM', iv },
                key,
                ciphertext,
            ),
        )
        if (!data) throw 'Malformed data'

        return decoder.decode(data)
    }

    export async function getDecryptedEmail(pl: string, password: string) {
        // Only decrypt once and then re-use the result
        return decrypted ? decrypted : decrypt(pl, password)
    }
</script>

<script lang="ts">
    import { onMount } from 'svelte'
    import IconEnvelope from 'virtual:icons/heroicons/envelope'
    import { once } from '../lib/utils'

    type Props = {
        class?: string
        style?: string
        compact?: boolean
        label?: string
    }
    const {
        class: className = '',
        style = '',
        compact = false,
        label = 'Kontakta mig',
    }: Props = $props()

    let href = $state('#')
    let email = $state('')

    function showEmail(event: PointerEvent) {
        event.preventDefault()
        event.stopPropagation()
        if (event.isTrusted) {
            href = 'mailto:' + email
        }
    }

    onMount(async () => {
        email = await getDecryptedEmail(pl, pwd)
    })
</script>

<a
    {href}
    onpointerenter={once(showEmail)}
    onfocusin={once(showEmail)}
    class="bg-brand inline-flex items-center gap-2 rounded-full text-black transition-colors duration-200 hover:bg-opacity-75 {className ||
        ''} {compact ? 'p-2 xs:px-4' : 'px-6 py-3'}"
    {style}
>
    <IconEnvelope class="size-6" aria-label={label} />
    <span class="whitespace-nowrap {compact ? 'hidden xs:block' : ''}">
        {label}
    </span>
</a>
