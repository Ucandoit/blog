# ucandoit.io

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) for my personal website.  
The goal is to try out Next.js alongside with strapi as headless CMS.

## Development

- The backend api is served by strapi (<https://github.com/Ucandoit/strapi-blog-api>)

- after launching the backend api server, run the development server:

```bash
yarn dev
```

## Deploy

The deploy process is to build a docker image which will be pushed to a private registry and then deployed to a kubernetes cluster.

- Build image using docker

```bash
docker build -t <name:tag> -f deploy/Dockerfile --build-arg host=<api server> .
```

- A secret to private docker registry must be created in `deploy/kustomize` folder

```bash
kubectl create secret docker-registry docker-registry -n ucandoit --docker-server=<registry> --docker-username=<USER> --docker-password=<PASSWORD> --dry-run=client -o yaml > secret-registry.yaml
```

- deploy with `kustomize`

```bash
kustomize build deploy/kustomize | kubectl apply -f -
```

## TODO

Functionnal

- [x] Implement blog pages
- [ ] Filter blogs by tag
- [ ] Infinite scroll
- [ ] Switch between dark/light theme
- [ ] I18N support

System

- [x] Render css server side
- [x] Add basic SEO support
- [ ] Add page specific SEO
- [x] add Gitlab actions to auto deploy
