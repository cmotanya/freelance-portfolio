"use client";

import { tabs, project_categories, gallery } from "@/data/project";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useState } from "react";

const ProjectTabs = () => {
  const [activeTab, setActiveTab] = useState<tabs | null>("all");

  const filteredGallery =
    activeTab === "all"
      ? gallery
      : gallery.filter((item) => item.value === activeTab);

  return (
    <div className="space-y-5 px-6">
      {/* tab navigation */}
      <div className="mt-4">
        <ul role="tablist" className="flex flex-wrap justify-center gap-6">
          {project_categories.map((category) => {
            const isActive = activeTab === category.value;

            return (
              <li key={category.value}>
                <button
                  type="button"
                  role="tab"
                  aria-selected={activeTab === category.value}
                  onClick={() => setActiveTab(category.value)}
                  className={cn(
                    "border-border bg-muted hover:border-muted-foreground/50 inline-block cursor-pointer overflow-hidden rounded-2xl border px-2 py-1.5 uppercase transition-all active:scale-105",
                    isActive &&
                      "bg-muted-foreground text-background border-0 active:scale-100",
                  )}
                >
                  {category.label}
                </button>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {filteredGallery.map((item, index) => (
          <div
            key={index}
            className="border-muted-foreground/50 relative h-55 w-full overflow-hidden rounded-md border"
          >
            <Image
              src={item.src}
              alt={`Project ${index}`}
              width={400}
              height={400}
              className="absolute inset-0 h-full w-full object-cover transition-all duration-500 hover:scale-105"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectTabs;
