import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import ThemeToggle from "@/components/theme-toggle";

export default function Header() {
  return (
    <header className="border-border bg-background sticky top-0 z-50 border-b px-4 py-4 backdrop-blur-md sm:px-6 md:px-8">
      <div className="mx-auto flex max-w-7xl flex-row items-center justify-between gap-4">
        <ThemeToggle />

        <Button
          asChild
          className="px-3 py-6 font-semibold tracking-wide uppercase transition-all duration-200 hover:scale-105 active:scale-95"
        >
          <Link href="/contact" className="flex items-center gap-1">
            Let&apos;s Talk
            <ArrowUpRight className="animate-float-slow size-4" />
          </Link>
        </Button>
      </div>
    </header>
  );
}
