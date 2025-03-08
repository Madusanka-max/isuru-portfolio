const nextConfig = {
  reactStrictMode: true,
  output: "standalone",
  experimental: {
    appDir: true, // Ensure App Router works correctly
  },
};

export default nextConfig;