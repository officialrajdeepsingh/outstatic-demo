/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
    // remotePatterns: [
    //   {
    //     hostname: 'avatars.githubusercontent.com',
    //   },
    // ],
  }
}

module.exports = nextConfig
