# SvelteKit with Directus

[As shown on this post.](https://docs.directus.io/blog/getting-started-directus-sveltekit.html#creating-pages-with-directus)

## Directus

A compose file is provided for development:

```console
$ cp .env.local.example .env.local
$ $EDITOR .env.local # fill out values as necessary.
$ podman compose up # or docker.
```

Then the Directus instance should be running.

## Developing

This project uses bun for managing dependencies and running npm scripts but it could easily be switched out.

```console
$ bun dev
```

Or start the server and open the app in a new browser tab:

```console
$ bun dev --open
```

## Building

To create a production version of your app:

```console
$ bun build
```

You can preview the production build with `bun preview`.

To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.
