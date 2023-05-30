# RandomPhoto

A [Next.js](https://nextjs.org/) playground project demonstrating the new [App Router](https://nextjs.org/docs/app) and its features using React Server Components. The app shows 200 random photos from [picsum.photos](https://picsum.photos) in a grid gallery with images that can take up one, two or three tiles. Upon clicking on a photo, it uses [parallel and intercepting routes](https://nextjs.org/docs/app/building-your-application/routing/intercepting-routes#modals) to show a higher resolution of the photo in a modal, while also changing the URL of the window. 

[Tailwind CSS](https://github.com/tailwindlabs/tailwindcss) and [Headless UI](https://github.com/tailwindlabs/headlessui) are used to build the user interface, while [Storybook](https://github.com/storybookjs/storybook) to document and visually test the components in isolation.

This project is bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

### Requirements

- Node.js
- npm/yarn/pnpm

### Installation

```bash
npm install
# or
yarn install
# or
pnpm install
```

### Usage

Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
