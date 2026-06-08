/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.mafiaislandecotourism.com",
      },
    ],
  },
}

module.exports = nextConfig
