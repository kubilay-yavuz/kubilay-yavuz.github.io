/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // If your repository name is username.github.io, you can omit basePath and assetPrefix
  // If it's a different repository name, uncomment and adjust these lines:
  // basePath: '/your-repo-name',
  // assetPrefix: '/your-repo-name',
  images: {
    unoptimized: true,
  },
}

export default nextConfig
