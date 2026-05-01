"use client";

import { categories, gallery, tabs } from "@/data/project";
import { useMemo, useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { AlbumNotFound01Icon, FolderOpenIcon } from "hugeicons-react";

const ProjectTabs = () => {
  const [active, setActive] = useState<tabs>("all");

  const results = useMemo(() => {
    return active === "all"
      ? gallery
      : gallery.filter((item) => item.value === active);
  }, [active]);

  return (
    <div className="my-15 px-5">
      <div className="mb-3 space-y-2">
        <h3 className="text-foreground/70 flex items-center gap-1.5 text-xl font-bold tracking-widest uppercase">
          <FolderOpenIcon color="#4a4a4a" size={28} strokeWidth={2} /> Gallery
        </h3>
        <p>Browse by category to see my work in action.</p>
      </div>

      <div className="space-y-6">
        <div className="bg-muted sticky top-22 isolate z-50 flex items-center justify-around overflow-hidden rounded-2xl border">
          {categories.map((cat, index) => {
            const isActive = active === cat.value;
            return (
              <button
                key={cat.value}
                onClick={() => setActive(cat.value)}
                className={cn(
                  "w-full cursor-pointer p-3",
                  index !== 0 && "border-l",
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

        <div className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3">
          {results.length > 0 ? (
            results.map((item, index) => (
              <div
                key={index}
                className="group bg-foreground cursor-pointer overflow-hidden rounded-2xl"
              >
                <div className="relative aspect-16/10 w-full">
                  {item.value && (
                    <Image
                      src={item.src}
                      alt={`Project ${index + 1}`}
                      fill
                      className="object-cover transition-all duration-500 group-hover:scale-110"
                    />
                  )}
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-3 flex items-center justify-center py-20">
              <span className="flex items-center gap-3.5 font-medium tracking-wider uppercase">
                <AlbumNotFound01Icon strokeWidth={2} /> No media available for
                this section.
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectTabs;
