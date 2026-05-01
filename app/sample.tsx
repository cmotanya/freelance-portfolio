// "use client";

// import { categories, gallery, tabs } from "@/data/project";
// import { cn } from "@/lib/utils";
// import Image from "next/image";
// import { useMemo, useState } from "react";

// const ProjectTabs = () => {
//   const [active, setActive] = useState<tabs>("all");

//   const results = useMemo(() => {
//     return active === "all"
//       ? gallery
//       : gallery.filter((item) => item.value === active);
//   }, [active]);

//   return (
//     <div className="my-10 space-y-6 px-5">
//       <div className="space-y-1">
//         <h2 className="text-2xl font-bold tracking-tight">Portfolio</h2>
//         <p className="text-muted-foreground">
//           Browse by category to see my work in action.
//         </p>
//       </div>

//       {/* Tabs Container */}
//       <div className="bg-card flex items-center overflow-hidden rounded-2xl border">
//         {categories.map((cat, index) => {
//           const isActive = active === cat.value;
//           return (
//             <button
//               key={cat.value}
//               onClick={() => setActive(cat.value)}
//               className={cn(
//                 "flex-1 p-3 transition-colors duration-200",
//                 // Avoid double borders: only add left border to items after the first one
//                 index !== 0 && "border-l",
//                 isActive
//                   ? "bg-foreground text-background"
//                   : "hover:bg-muted text-muted-foreground",
//               )}
//             >
//               <span className="text-xs font-semibold tracking-wider uppercase md:text-sm">
//                 {cat.label}
//               </span>
//             </button>
//           );
//         })}
//       </div>

//       {/* Gallery Grid */}
//       <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
//         {results.length > 0 ? (
//           results.map((item) => (
//             <div
//               key={item.src} // Use src or a unique ID instead of index
//               className="group bg-muted relative cursor-pointer overflow-hidden rounded-2xl border"
//             >
//               <div className="relative aspect-[16/10] w-full">
//                 <Image
//                   src={item.src}
//                   alt={item.label || "Project Image"}
//                   fill
//                   className="object-cover transition-transform duration-500 group-hover:scale-105"
//                   sizes="(max-width: 768px) 100vw, 50vw"
//                 />
//                 {/* Optional Hover Overlay */}
//                 <div className="absolute inset-0 bg-black/20 opacity-0 transition-opacity group-hover:opacity-100" />
//               </div>
//             </div>
//           ))
//         ) : (
//           <div className="col-span-2 py-20 text-center">
//             <p className="text-muted-foreground text-xl">
//               No media available for this section.
//             </p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ProjectTabs;
