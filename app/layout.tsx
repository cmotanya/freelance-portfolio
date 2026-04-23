import { sora } from "@/data/fonts";
import "./globals.css";
import { siteMetadata } from "@/data/metadata";
import { cn } from "@/lib/utils";
import Header from "./Header/page";
import Footer from "./Footer/page";
import HotToaster from "@/components/hot-toaster";

export const metadata = siteMetadata;

const themeInitScript = `
(() => {
  const stored = localStorage.getItem("theme");
  const mode =
  stored === "light" || stored === "dark"
  ? stored
  : window.matchMedia("(prefers-color-scheme: dark)").matches
  ? "dark"
  : "light";
  
  document.documentElement.classList.remove("light", "dark");
  document.documentElement.classList.add(mode);
  document.documentElement.setAttribute("data-theme", mode);
  document.documentElement.style.colorScheme = mode;
})()`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth" suppressHydrationWarning>
      <body className={cn("h-full", "relative", "antialiased", sora.variable)}>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <Header />
        {children}
        <Footer />

        <HotToaster />
      </body>
    </html>
  );
}
