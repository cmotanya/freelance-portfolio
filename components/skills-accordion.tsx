import { skills_group } from "@/data/skills";
import { cn } from "@/lib/utils";
import { Plus } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";

const SkillsAccordion = () => {
  const [open, setOpen] = useState<string | null>(null);

  const toggle = (id: string) => setOpen(open === id ? null : id);

  return (
    <div>
      <h4 className="font-mono text-2xl">Skills that I&apos;ve acquired</h4>

      <div>
        {skills_group.map((group) => {
          const isOpen = open === group.index;

          return (
            <div key={group.index} className="leading-none">
              <div
                onClick={() => toggle(group.index)}
                className="bg-muted border-muted-foreground/20 my-3 cursor-pointer rounded-md border p-3"
              >
                <span className="text-muted-foreground">
                  Category {group.index}
                </span>

                <div className="flex items-center justify-between">
                  <h5 className="font-bold tracking-tight">{group.category}</h5>
                  {/* <p className="text-muted-foreground">{group.tags}</p> */}
                  <Button variant="outline" size="icon">
                    <Plus className={cn("size-5", isOpen ? "rotate-45" : "")} />
                  </Button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SkillsAccordion;
