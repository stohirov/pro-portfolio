/** @type {import('next').NextConfig} */
const nextConfig = {
  // Emit a fully static site to ./out (deployable to any static host).
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;
