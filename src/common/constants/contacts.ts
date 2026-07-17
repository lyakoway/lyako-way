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
  { label: "+7 (999) 812-19-75", href: "tel:+79998121975" },
  { label: "+7 (977) 270-09-30", href: "tel:+79772700930" },
];

export const CONTACT_EMAIL: ContactLink = {
  label: "mazurenko-alexey@mail.ru",
  href: "mailto:mazurenko-alexey@mail.ru",
};

export const CONTACT_MESSENGERS: ContactLink[] = [
  { label: "Telegram", href: "https://t.me/amazurenk" },
  {
    label: "WhatsApp",
    href: "https://api.whatsapp.com/send?phone=79772700930",
  },
  { label: "Skype", href: "skype:aleks10_0?chat" },
];
