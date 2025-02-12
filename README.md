# Todo App Next.js

This is a simple Todo App built with [Next.js](https://nextjs.org), using TypeScript and Tailwind CSS.

## Getting Started

### Prerequisites

- Node.js (LTS recommended)
- npm, yarn, or pnpm installed globally

### Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/YOUR_GITHUB_USERNAME/todo-app-nextjs.git
cd todo-app-nextjs
npm install  # or yarn install or pnpm install
```

### Running the Development Server

To start the development server, run:

```bash
npm run dev  # or yarn dev or pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the app.

### Building for Production

To build the project for production:

```bash
npm run build
```

To preview the production build:

```bash
npm run start
```

### Exporting as Static Files

If deploying to GitHub Pages or a static host:

```bash
npm run build && npm run export
```

This will create an `out/` directory with the exported static site.

## Deployment

For deployment, ensure `next.config.js` is correctly configured:

```js
const nextConfig = {
  output: "export",
  basePath: "/todo-app-nextjs",
  assetPrefix: "/todo-app-nextjs/",
  trailingSlash: true,
};

export default nextConfig;
```

Then push the `out/` directory to your hosting service (e.g., GitHub Pages, Vercel, Netlify).

## Features

- Add, edit, and delete tasks
- Persistent state management
- Responsive UI with Tailwind CSS

## Contributing

Pull requests are welcome! Feel free to open an issue for discussion.

## License

This project is open-source and available under the [MIT License](LICENSE).
