/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  // GitHub Pages serves content from a repo name subdirectory
  // If you're using a custom domain, you can remove this line
  basePath: "",
}

module.exports = nextConfig
