/** @type {import('next').NextConfig} */
const nextConfig = {};

export default {
  output: 'export',
  // Add the basePath to match your GitHub Pages URL structure
  basePath: '/github-actions-with-react',
  images: {
    unoptimized: true,
  },
}
