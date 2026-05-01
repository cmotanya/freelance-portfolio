"use client";

import { categories, gallery, tabs } from "@/data/project";
import { useMemo, useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

const ProjectTabs = () => {
  const [active, setActive] = useState<tabs>("all");

  const results = useMemo(() => {
    return active === "all"
      ? gallery
      : gallery.filter((item) => item.value === active);
  }, [active]);

  return (
    <div className="my-10 space-y-5 px-5">
      <p>Browse by category to see my work in action.</p>

      <div className="flex items-center justify-around overflow-hidden rounded-2xl border">
        {categories.map((cat) => {
          const isActive = active === cat.value;
          return (
            <button
              key={cat.value}
              onClick={() => setActive(cat.value)}
              className={cn(
                "w-full border-l p-3",
                isActive && "bg-foreground text-background",
              )}
            >
              <span className="font-medium tracking-wider uppercase">
                {cat.label}
              </span>
            </button>
          );
        })}
      </div>

      <div className="grid grid-cols-2 gap-2">
        {results.map((item, index) => (
          <div
            key={index}
            className="group bg-foreground cursor-pointer overflow-hidden rounded-2xl"
          >
            <div className="relative aspect-16/10 w-full">
              <Image
                src={item.src}
                alt={`Project ${index + 1}`}
                fill
                className="object-cover transition-all duration-500 group-hover:scale-110"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectTabs;
