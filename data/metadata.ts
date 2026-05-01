import { Metadata } from "next";

export const siteMetadata: Metadata = {
  title: "Cornelius Motanya | Full-Stack Developer & Network Engineer",
  description:
    "Portfolio of Cornelius Motanya, specializing in high-performance web applications and robust network infrastructure.",
  authors: [{ name: "Cornelius Motanya" }],
  generator: "Next.js",
  applicationName: "Cornelius Motanya Portfolio",
  keywords: [
    "Cornelius Motanya",
    "Full-Stack Developer",
    "Network Engineer",
    "Web Development",
    "Next.js",
    "React",
    "TailwindCSS",
    "TypeScript",
    "JavaScript",
    "PostgreSQL",
  ],
  referrer: "origin-when-cross-origin",
  creator: "Cornelius Motanya",
  publisher: "Cornelius Motanya",

  metadataBase: new URL("https://motanya.netlify.app"),

  manifest: "/icons/site.webmanifest",

  icons: {
    icon: [
      { url: "/icons/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/icons/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    shortcut: "icons/favicon-16x16.png",
    apple: {
      url: "/icons/apple-touch-icon.png",
      sizes: "180x180",
      type: "image/png",
    },
  },
};
