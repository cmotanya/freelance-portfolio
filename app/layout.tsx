import { sora } from "@/data/fonts";
import "./globals.css";
import { siteMetadata } from "@/data/metadata";
import { cn } from "@/lib/utils";
import Header from "./header";
import { JetBrains_Mono, Inter } from "next/font/google";

const inter = Inter({subsets:['latin'],variable:'--font-sans'});

const jetbrainsMono = JetBrains_Mono({subsets:['latin'],variable:'--font-mono'});

export const metadata = siteMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth" data-theme="light" className={cn( jetbrainsMono.variable, "font-sans", inter.variable)}>
      <body className={cn("h-full", "relative", "antialiased", sora.variable)}>
        <Header />
        {children}
      </body>
    </html>
  );
}
