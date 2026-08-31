import { HeaderTopMenuProps } from "src/common/types/lang";

// Иконки — ключи из MENU_ICONS (src/common/lib/iconRegistry): словарь
// сериализуется в Redux/__NEXT_DATA__, React-элементы в JSON не переживают.
export const propsHeaderTopMenu: HeaderTopMenuProps[] = [
  {
    id: "0",
    label: "House",
    value: "",
    icon: "logoSign",
  },
  {
    id: "1",
    label: "About me",
    value: "person",
    icon: "person",
  },
  {
    id: "2",
    label: "Resume",
    value: "resume",
    icon: "resume",
  },
  {
    id: "3",
    label: "Services",
    value: "services",
    icon: "services",
  },
  {
    id: "4",
    label: "Cooperation",
    value: "cooperation",
    icon: "cooperation",
  },
  {
    id: "5",
    label: "Portfolio",
    value: "portfolio",
    href: "portfolio",
    icon: "portfolio",
  },
  {
    id: "6",
    label: "Blog",
    value: "blog",
    href: "blog",
    icon: "blog",
  },
  {
    id: "7",
    label: "Contacts",
    value: "contacts",
    icon: "contacts",
  },
];
