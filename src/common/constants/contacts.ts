// Контактные данные (не зависят от языка). Раньше были захардкожены
// в src/components/HeaderSection; вынесены сюда для переиспользования
// в сайдбаре-визитке и других местах.

export interface ContactPhone {
  label: string;
  href: string;
}

export interface ContactLink {
  label: string;
  href: string;
}

export const CONTACT_PHONES: ContactPhone[] = [
  { label: "+7 (977) 270-09-30", href: "tel:+79772700930" },
];

export const CONTACT_EMAIL: ContactLink = {
  label: "lyakoway@gmail.com",
  href: "mailto:lyakoway@gmail.com",
};

export const CONTACT_MESSENGERS: ContactLink[] = [
  { label: "Telegram", href: "https://t.me/amazurenk" },
  {
    label: "WhatsApp",
    href: "https://api.whatsapp.com/send?phone=79772700930",
  },
];

export const CONTACT_GITHUB: ContactLink = {
  label: "GitHub",
  href: "https://github.com/lyakoway",
};

export const CONTACT_LINKEDIN: ContactLink = {
  label: "LinkedIn",
  href: "https://www.linkedin.com/in/alexey-mazurenko-63068941b/",
};

export const CONTACT_PROFILES: ContactLink[] = [
  CONTACT_GITHUB,
  CONTACT_LINKEDIN,
];
