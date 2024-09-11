import { Metadata } from "next";
import { HOME_DOMAIN } from "../../registry/registry-main";

export function constructMetadata({
  title = `${process.env.NEXT_PUBLIC_APP_NAME} - Your Modern Project Management Tool`,
  description = `${process.env.NEXT_PUBLIC_APP_NAME} helps teams manage their projects efficiently with advanced tools and real-time collaboration features.`,
  image = "https://github.com/user-attachments/assets/4cc1ef02-e07f-471f-9385-cc2854854d84",
  icons = [
    {
      rel: "apple-touch-icon",
      sizes: "32x32",
      url: "/apple-touch-icon.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      url: "/favicon-32x32.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      url: "/favicon-16x16.png",
    },
  ],
  canonicalUrl,
}: {
  title?: string;
  description?: string;
  image?: string | null;
  video?: string | null;
  icons?: Metadata["icons"];
  canonicalUrl?: string;
  noIndex?: boolean;
} = {}): Metadata {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      ...(image && {
        images: image,
      }),
    },
    icons,
    metadataBase: new URL(HOME_DOMAIN),
    ...(canonicalUrl && {
      alternates: {
        canonical: canonicalUrl,
      },
    }),
  };
}
