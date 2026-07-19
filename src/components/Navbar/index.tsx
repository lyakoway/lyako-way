import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import { useSelectorTyped } from "src/store";

import { NavbarWrapper, NavbarList, NavbarItem, NavLabel } from "./style";

// Значение пункта меню (propsHeaderTopMenu.value) → реальный роут Next.
// Пункты без записи здесь (cooperation) в навбар не попадают.
const ROUTE_BY_VALUE: Record<string, string> = {
  "": "/",
  person: "/profile",
  resume: "/cv",
  services: "/services",
  portfolio: "/portfolio",
  blog: "/blog",
  contacts: "/contacts",
};

const isActive = (pathname: string, href: string) =>
  href === "/" ? pathname === "/" : pathname.startsWith(href);

// Иконка «Дом» — заменяет текстовый логотип < / > из lang.
// fill: currentColor → красится как остальные иконки навбара.
const HomeIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden>
    <path
      d="M11.3 2.7a1 1 0 0 1 1.4 0l8 8a1 1 0 0 1-.7 1.7H19v7a1 1 0 0 1-1 1h-4v-5h-4v5H6a1 1 0 0 1-1-1v-7H4a1 1 0 0 1-.7-1.7l8-8Z"
      fill="currentColor"
    />
  </svg>
);

const Navbar = () => {
  const {
    lang: { propsHeaderTopMenu },
  } = useSelectorTyped(({ lang }) => lang);
  const { pathname } = useRouter();

  const items = propsHeaderTopMenu
    .filter((item) => item.value in ROUTE_BY_VALUE)
    .map((item) => ({ ...item, href: ROUTE_BY_VALUE[item.value] }));

  return (
    <NavbarWrapper>
      <NavbarList>
        {items.map((item) => (
          <NavbarItem key={item.id}>
            <Link href={item.href} data-active={isActive(pathname, item.href)}>
              {item.value === "" ? <HomeIcon /> : item.icon}
              <NavLabel>{item.label}</NavLabel>
            </Link>
          </NavbarItem>
        ))}
      </NavbarList>
    </NavbarWrapper>
  );
};

export default Navbar;
