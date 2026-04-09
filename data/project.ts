export type tabs = "all" | "website" | "installation";
export type project_status = "Completed" | "In Progress";

export const project_categories: { value: tabs; label: string }[] = [
  { value: "all", label: "All" },
  { value: "website", label: "Website" },
  { value: "installation", label: "Installation" },
];

export const gallery: { value: tabs; src: string }[] = [
  {
    value: "installation",
    src: "https://res.cloudinary.com/di7ib6wxw/image/upload/v1775759016/starlink_installation_waxh4j.jpg",
  },
  {
    value: "installation",
    src: "https://res.cloudinary.com/di7ib6wxw/image/upload/v1775759017/network_cabinet_t4pc4o.jpg",
  },
  {
    value: "installation",
    src: "https://res.cloudinary.com/di7ib6wxw/image/upload/v1775758934/amplifier_s1s2ht.jpg",
  },
  {
    value: "installation",
    src: "https://res.cloudinary.com/di7ib6wxw/image/upload/v1775759018/jbl_speakers_vsvzk8.jpg",
  },
];
