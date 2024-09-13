import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  webVitalsAttribution: ["CLS", "LCP", "RES", "FCP", "INP", "FID", "TTFB"],
  experimental: {
    optimizePackageImports: [
      "framer-motion",
      "lucide-react",
      "react-wrap-balancer",
      "embla-carousel-react",
    ],
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
        pathname: "/u/**",
      },
      {
        protocol: "https",
        hostname: "github.com",
        pathname: "/user-attachments/assets/**",
      },
    ],
  },
};

export default withNextIntl(nextConfig);
