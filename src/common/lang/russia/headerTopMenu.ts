import { HeaderTopMenuProps } from "src/common/types/lang";

// Иконки — ключи из MENU_ICONS (src/common/lib/iconRegistry): словарь
// сериализуется в Redux/__NEXT_DATA__, React-элементы в JSON не переживают.
export const propsHeaderTopMenu: HeaderTopMenuProps[] = [
  {
    id: "0",
    label: "Дом",
    value: "",
    icon: "logoSign",
  },
  {
    id: "1",
    label: "Обо мне",
    value: "person",
    icon: "person",
  },
  {
    id: "2",
    label: "Резюме",
    value: "resume",
    icon: "resume",
  },
  {
    id: "3",
    label: "Услуги",
    value: "services",
    icon: "services",
  },
  {
    id: "4",
    label: "Сотрудничество",
    value: "cooperation",
    icon: "cooperation",
  },
  {
    id: "5",
    label: "Портфолио",
    value: "portfolio",
    href: "portfolio",
    icon: "portfolio",
  },
  {
    id: "6",
    label: "Блог",
    value: "blog",
    href: "blog",
    icon: "blog",
  },
  {
    id: "7",
    label: "Контакты",
    value: "contacts",
    icon: "contacts",
  },
];
