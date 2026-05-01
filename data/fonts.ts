import { Nova_Script, Sora } from "next/font/google";

export const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const nova = Nova_Script({
  subsets: ["latin"],
  variable: "--font-bubblegum",
  display: "swap",
  weight: ["400"],
});
