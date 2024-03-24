/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      // allow images from these domains
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
        // pathname: "/account123/**",
      },
      {
        protocol: "https",
        hostname: "images.pexels.com",
        port: "",
        // pathname: "/account123/**",
      },
    ],
  },
  compiler: {
    styledComponents: true,
  },
};

export default nextConfig;
