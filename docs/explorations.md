# Explorations

This document takes notes about all encountered problems.

## Eslint configuration

Since Next.js v11.0.0, it provides an integrated eslint configurations by default. If we want to add more configurations, we need to be sure that they are not overwritten by next. See <https://github.com/vercel/next.js/discussions/24900> for more details.

## Lint staged

Integrating `next lint` in `lint-staged` acutally causes problems (v11.1.2). There will be a fix soon, for now we could use `yarn eslint`. cf. this [issue](https://github.com/vercel/next.js/issues/27997)
