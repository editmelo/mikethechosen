/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  // The B&W look is now a theme toggle on the home page; /test is retired.
  async redirects() {
    return [{ source: "/test", destination: "/", permanent: false }];
  },
};

export default nextConfig;
