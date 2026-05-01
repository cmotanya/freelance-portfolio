// "use client";

// import React, { useState, useMemo, useEffect, useRef } from "react";
// import Image from "next/image";
// import { tabs, project_categories, gallery, categories } from "@/data/project";
// import { cn } from "@/lib/utils";
// import {
//   ExternalLink,
//   Plus,
//   Cpu,
//   ArrowUpRight,
//   X,
//   Code2,
//   Terminal,
//   Activity,
//   Globe,
//   Server,
//   ShieldCheck,
//   History,
// } from "lucide-react";

// const ProjectTabs = () => {
//   const [activeTab, setActiveTab] = useState<tabs>("all");
//   const [selectedProject, setSelectedProject] = useState<any>(null);
//   const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
//   const containerRef = useRef<HTMLDivElement>(null);

//   // Spotlight Logic
//   useEffect(() => {
//     const handleMouseMove = (e: MouseEvent) => {
//       if (containerRef.current) {
//         const rect = containerRef.current.getBoundingClientRect();
//         setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
//       }
//     };
//     window.addEventListener("mousemove", handleMouseMove);
//     return () => window.removeEventListener("mousemove", handleMouseMove);
//   }, []);

//   const filteredGallery = useMemo(() => {
//     return activeTab === "all"
//       ? gallery
//       : gallery.filter((item) => item.value === activeTab);
//   }, [activeTab]);

//   return (
//     <div
//       ref={containerRef}
//       className="relative min-h-screen w-full overflow-hidden bg-[#050505] font-sans text-slate-50 selection:bg-emerald-500/30"
//     >
//       {/* ── Background Elements ── */}
//       <div
//         className="pointer-events-none absolute inset-0 z-30 transition-opacity duration-500"
//         style={{
//           background: `radial-gradient(800px circle at ${mousePos.x}px ${mousePos.y}px, rgba(16, 185, 129, 0.08), transparent 40%)`,
//         }}
//       />
//       <div className="fixed inset-0 z-0">
//         <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] bg-[size:40px_40px]" />
//       </div>

//       <div className="relative z-10 mx-auto max-w-7xl px-6 py-12 lg:py-20">
//         {/* ── Header with Live Counter ── */}
//         <header className="mb-16 flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
//           <div className="space-y-4">
//             <div className="flex items-center gap-3">
//               <div className="h-1 w-12 bg-emerald-500" />
//               <span className="text-[10px] font-black tracking-[0.3em] text-emerald-500 uppercase">
//                 Repository v4.0
//               </span>
//             </div>
//             <h1 className="text-5xl font-bold tracking-tight md:text-7xl lg:text-8xl">
//               System{" "}
//               <span className="font-extralight text-slate-500">Log_</span>
//             </h1>
//           </div>
//           <div className="flex flex-col items-end gap-2 text-right">
//             <div className="flex items-center gap-4 font-mono text-[10px] text-slate-500">
//               <span className="flex items-center gap-1">
//                 <History size={12} /> LAST_SYNC: 2m ago
//               </span>
//               <span className="flex items-center gap-1 text-emerald-500">
//                 <Server size={12} /> STATUS: STABLE
//               </span>
//             </div>
//             <p className="max-w-[240px] text-xs leading-relaxed text-slate-400">
//               Displaying{" "}
//               <span className="font-bold text-white">
//                 {filteredGallery.length}
//               </span>{" "}
//               of {gallery.length} verified deployments.
//             </p>
//           </div>
//         </header>

//         {/* ── Category Navigation ── */}
//         <div className="sticky top-8 z-40 mb-12 flex justify-center">
//           <nav className="flex items-center gap-1 rounded-2xl border border-white/10 bg-black/80 p-1.5 shadow-2xl backdrop-blur-2xl">
//             {categories.map((cat) => {
//               const isActive = activeTab === cat.value;
//               return (
//                 <button
//                   key={cat.value}
//                   onClick={() => setActiveTab(cat.value as tabs)}
//                   className={cn(
//                     "relative flex items-center gap-3 rounded-xl px-6 py-3 text-[10px] font-bold tracking-widest uppercase transition-all",
//                     isActive
//                       ? "text-black"
//                       : "text-slate-400 hover:text-slate-100",
//                   )}
//                 >
//                   {isActive && (
//                     <div className="absolute inset-0 z-0 rounded-lg bg-white" />
//                   )}
//                   <span className="relative z-10">{cat.label}</span>
//                 </button>
//               );
//             })}
//           </nav>
//         </div>

//         {/* ── Project Grid ── */}
//         <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
//           {filteredGallery.map((item, index) => (
//             <div
//               key={index}
//               onClick={() => setSelectedProject({ ...item, id: index })}
//               className="group relative flex cursor-pointer flex-col overflow-hidden rounded-[2.5rem] border border-white/5 bg-slate-900/20 transition-all hover:border-emerald-500/40 hover:bg-slate-900/40"
//             >
//               {/* Image Section */}
//               <div className="relative aspect-[16/10] w-full overflow-hidden">
//                 <Image
//                   src={item.src}
//                   alt={item.title || "Project"}
//                   fill
//                   className="object-cover transition-transform duration-1000 group-hover:scale-110"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-[#050505] to-transparent" />

//                 {/* Float Badge */}
//                 <div className="absolute top-6 left-6 flex gap-2">
//                   <div className="rounded-full border border-white/10 bg-black/60 px-3 py-1 font-mono text-[9px] text-white/70 backdrop-blur-md">
//                     0{index + 1}
//                   </div>
//                 </div>
//               </div>

//               {/* Content Section */}
//               <div className="relative -mt-12 space-y-4 p-8 pt-0">
//                 <div className="flex items-center justify-between">
//                   <h3 className="text-2xl font-bold text-white transition-colors group-hover:text-emerald-400">
//                     {item.title || "Module.Void"}
//                   </h3>
//                   <div className="rounded-full bg-emerald-500/10 p-2 text-emerald-500 opacity-0 transition-all group-hover:translate-x-1 group-hover:opacity-100">
//                     <ArrowUpRight size={20} />
//                   </div>
//                 </div>

//                 <div className="flex flex-wrap gap-2">
//                   {/* This assumes your data has tags. If not, these are placeholders */}
//                   {["Security", "Cloud", "Architecture"].map((tag) => (
//                     <span
//                       key={tag}
//                       className="rounded-sm border border-white/10 px-2 py-0.5 text-[8px] font-black tracking-tighter text-slate-500 uppercase"
//                     >
//                       {tag}
//                     </span>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           ))}

//           {/* Add Placeholder */}
//           <div className="group flex aspect-[16/10] flex-col items-center justify-center gap-4 rounded-[2.5rem] border-2 border-dashed border-white/5 bg-white/[0.01] transition-all hover:border-emerald-500/20 hover:bg-white/[0.03]">
//             <div className="flex h-14 w-14 items-center justify-center rounded-full border border-white/10 text-slate-500 transition-all group-hover:scale-110 group-hover:text-emerald-500">
//               <Plus size={28} strokeWidth={1} />
//             </div>
//             <span className="font-mono text-[10px] tracking-[0.3em] text-slate-600 uppercase">
//               Sync_In_Progress
//             </span>
//           </div>
//         </div>
//       </div>

//       {/* ── Enhanced Side Manifest ── */}
//       <div
//         className={cn(
//           "fixed inset-y-0 right-0 z-[100] w-full max-w-md border-l border-white/10 bg-[#080808]/98 backdrop-blur-3xl transition-transform duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] md:max-w-xl",
//           selectedProject
//             ? "translate-x-0 shadow-[-50px_0_100px_rgba(0,0,0,0.9)]"
//             : "translate-x-full",
//         )}
//       >
//         {selectedProject && (
//           <div className="custom-scrollbar flex h-full flex-col overflow-y-auto">
//             {/* Drawer Header */}
//             <div className="sticky top-0 z-10 flex items-center justify-between border-b border-white/5 bg-[#080808]/80 p-6 backdrop-blur-md">
//               <div className="flex items-center gap-4">
//                 <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-500">
//                   <ShieldCheck size={20} />
//                 </div>
//                 <div>
//                   <p className="text-[10px] font-bold tracking-widest text-slate-500 uppercase">
//                     Entry Verified
//                   </p>
//                   <p className="font-mono text-xs">HASH: 77x_B92</p>
//                 </div>
//               </div>
//               <button
//                 onClick={() => setSelectedProject(null)}
//                 className="rounded-full p-2 transition-colors hover:bg-white/10"
//               >
//                 <X size={24} />
//               </button>
//             </div>

//             <div className="space-y-10 p-8">
//               <div className="group relative aspect-video w-full overflow-hidden rounded-[2rem] border border-white/10">
//                 <Image
//                   src={selectedProject.src}
//                   alt="Preview"
//                   fill
//                   className="object-cover"
//                 />
//                 <div className="absolute inset-0 bg-emerald-500/10 opacity-0 transition-opacity group-hover:opacity-100" />
//               </div>

//               <div className="space-y-4">
//                 <h2 className="text-5xl font-bold tracking-tighter italic">
//                   {selectedProject.title}
//                 </h2>
//                 <div className="flex items-center gap-6 text-[10px] font-bold tracking-widest text-slate-500 uppercase">
//                   <span className="flex items-center gap-2">
//                     <Globe size={12} /> Global Node
//                   </span>
//                   <span className="flex items-center gap-2">
//                     <Code2 size={12} /> Production Ready
//                   </span>
//                 </div>
//               </div>

//               <div className="grid grid-cols-1 gap-4">
//                 <div className="rounded-3xl border border-white/5 bg-white/[0.02] p-6">
//                   <h4 className="mb-4 flex items-center gap-2 text-xs font-bold tracking-widest text-emerald-500 uppercase">
//                     <Terminal size={14} /> Execution Summary
//                   </h4>
//                   <p className="text-sm leading-relaxed text-slate-300">
//                     {selectedProject.desc ||
//                       "Operational data suggests a high-efficiency deployment. This module integrates seamlessly into existing infrastructure with automated failover and secure handoff."}
//                   </p>
//                 </div>
//               </div>

//               <div className="space-y-4">
//                 <h4 className="text-xs font-bold tracking-widest text-slate-500 uppercase">
//                   Infrastructure Stack
//                 </h4>
//                 <div className="flex flex-wrap gap-2">
//                   {[
//                     "Next.js",
//                     "TypeScript",
//                     "TailwindCSS",
//                     "Prisma",
//                     "PostgreSQL",
//                     "Docker",
//                   ].map((tech) => (
//                     <div
//                       key={tech}
//                       className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 font-mono text-[10px] transition-colors hover:border-emerald-500/50"
//                     >
//                       {tech}
//                     </div>
//                   ))}
//                 </div>
//               </div>

//               <div className="pt-10">
//                 <button className="group flex w-full items-center justify-center gap-4 rounded-full bg-white py-5 text-[11px] font-black tracking-[0.3em] text-black uppercase transition-all hover:scale-[1.02] hover:bg-emerald-500">
//                   Launch System{" "}
//                   <ExternalLink
//                     size={18}
//                     className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
//                   />
//                 </button>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>

//       {/* Close Overlay */}
//       {selectedProject && (
//         <div
//           className="fixed inset-0 z-[90] bg-black/80 backdrop-blur-sm transition-opacity"
//           onClick={() => setSelectedProject(null)}
//         />
//       )}
//     </div>
//   );
// };

// export default ProjectTabs;
