import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "matheusscode.dev - Software Engineer & Architect",
    short_name: "MSC.dev",
    description:
      "Explore the personal portfolio of Matheusscode, a Software Engineer and Architect. Discover innovative projects, technical blog posts, and the latest updates in software development.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#171717",
    icons: [
      {
        src: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
