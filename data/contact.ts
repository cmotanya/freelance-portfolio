export const contactDetails = {
  phoneLabel: "+254 712 909 475",
  phoneHref: "tel:+254712909475",
  whatsappLabel: "WhatsApp",
  whatsappHref: "https://wa.me/254712909475",
  emailLabel: "motanyac@gmail.com",
  emailHref: "mailto:motanyac@gmail.com",
  location: "Mombasa, Kenya",
};

export const quickLinks = [
  {
    title: "Phone",
    value: contactDetails.phoneLabel,
    href: contactDetails.phoneHref,
    iconSrc: "/socials/smart-phone.svg",
    note: "Call for urgent or direct inquiries.",
  },
  {
    title: "Email",
    value: contactDetails.emailLabel,
    href: contactDetails.emailHref,
    iconSrc: "/socials/gmail.png",
    note: "Best for project details and formal requests.",
  },
  {
    title: "WhatsApp",
    value: contactDetails.whatsappLabel,
    href: contactDetails.whatsappHref,
    iconSrc: "/socials/whatsapp.svg",
    note: "Quick chat for simple questions and follow-ups.",
  },
];

export const faqs = [
  {
    q: "What is your typical project lead time?",
    a: "For web builds, usually 2–4 weeks. Infrastructure audits or physical networking setups can often be scheduled within 72 hours depending on site location.",
  },
  {
    q: "Do you handle both hardware and software?",
    a: "Yes. I specialize in the intersection of both—deploying robust networks and building the custom software that runs on them.",
  },
  {
    q: "How do you handle maintenance?",
    a: "I offer 'Node-Care' retainers for 24/7 monitoring. For one-off projects, I provide 30 days of complimentary technical support.",
  },
  {
    q: "What tech stack do you prefer?",
    a: "My 'Golden Stack' is Next.js, TypeScript, and Supabase. For physical security, I focus on Hikvision and Ubiquiti ecosystems.",
  },
];
