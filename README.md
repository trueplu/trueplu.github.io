# Plumppu Musikproduktion website

<https://plumppumusik.se>

## Encrypted email

We protect public facing emails with a simple but effective obfuscation layer.

1. Create a `.env` file based on `.env.example` and fill in `EMAIL` and `PUBLIC_PASSWORD`.
2. Run `node scripts/encrypt-text.js` and copy the terminal output.
3. Add the result to `PUBLIC_PAYLOAD` in the `.env` file.
4. Use the `EncryptedEmail.svelte` component to make it accessible for users.
