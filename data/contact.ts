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
