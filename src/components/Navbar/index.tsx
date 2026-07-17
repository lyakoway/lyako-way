import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import { useSelectorTyped } from "src/store";

import { NavbarWrapper, NavbarList, NavbarItem } from "./style";

// Значение пункта меню (propsHeaderTopMenu.value) → реальный роут Next.
// Пункты без записи здесь (cooperation, contacts) в навбар не попадают.
const ROUTE_BY_VALUE: Record<string, string> = {
  "": "/",
  person: "/profile",
  resume: "/cv",
  services: "/services",
  portfolio: "/portfolio",
  blog: "/blog",
};

const isActive = (pathname: string, href: string) =>
  href === "/" ? pathname === "/" : pathname.startsWith(href);

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
              {item.label}
            </Link>
          </NavbarItem>
        ))}
      </NavbarList>
    </NavbarWrapper>
  );
};

export default Navbar;
