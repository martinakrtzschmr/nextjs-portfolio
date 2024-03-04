## Objective:

The main objective of this project is to use and configure correctly Typescript.
This project uses typescript: 5.3.3, other versions can cause different errors and compatbility issues.

The secondary objective is the use of form managers with Typescript and tools that would agregate to that experience, such as [tRPC](https://trpc.io/docs/quickstart), [react-hook-form](https://react-hook-form.com/get-started) and [payload](https://payloadcms.com/docs/getting-started/what-is-payload).

## How to run the project:

Installing:

```bash
npm i
# or
pnpm i
```

Running on dev:

```bash
npm run dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## How to build the project:

```sh
npm run build
# or
pnpm build
```

## How to deploy the project?

```sh
pnpm dlx vercel ./dist --prod
```

> Be sure to login into your [Vercel](vercel.com) account and connect the correct repository, the deployment should be automatic after the next commits.
