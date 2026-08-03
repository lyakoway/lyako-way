import React, { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import { useSelectorTyped } from "src/store";

import {
  NavbarWrapper,
  NavbarList,
  NavbarItem,
  NavLabel,
  NavIndicator,
} from "./style";

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
    lang: { propsHeaderTopMenu, name: langName },
  } = useSelectorTyped(({ lang }) => lang);
  const { pathname } = useRouter();

  const items = propsHeaderTopMenu
    .filter((item) => item.value in ROUTE_BY_VALUE)
    .map((item) => ({ ...item, href: ROUTE_BY_VALUE[item.value] }));

  const activeId = items.find((item) => isActive(pathname, item.href))?.id;

  /* Ховер ведём сами, по pointer-событиям, и только для мыши: CSS :hover на
     тач-устройствах залипает после тапа (белая линия оставалась висеть на
     нажатом пункте), а media (hover: hover) там ненадёжен. */
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const handlePointerEnter =
    (id: string) => (event: React.PointerEvent<HTMLElement>) => {
      if (event.pointerType === "mouse") setHoveredId(id);
    };

  const handlePointerLeave = () => setHoveredId(null);

  // После перехода курсор может остаться над пунктом — сбрасываем, чтобы белая
  // линия не соседствовала с оранжевым бегунком на том же пункте.
  useEffect(() => {
    setHoveredId(null);
  }, [pathname]);

  // Метрики подписи активного пункта: по ним позиционируем бегунок. Меняется
  // активный пункт → меняется transform, и полоса переезжает через остальные.
  const listRef = useRef<HTMLUListElement>(null);
  const labelRefs = useRef<Record<string, HTMLSpanElement | null>>({});
  const [bar, setBar] = useState<{
    left: number;
    width: number;
    top: number;
  } | null>(null);

  const measure = useCallback(() => {
    const list = listRef.current;
    const label = activeId ? labelRefs.current[activeId] : null;

    if (!list || !label) {
      setBar(null);
      return;
    }

    const listRect = list.getBoundingClientRect();
    const labelRect = label.getBoundingClientRect();

    setBar({
      // scrollLeft — на узких экранах список прокручивается по горизонтали.
      left: labelRect.left - listRect.left + list.scrollLeft,
      width: labelRect.width,
      top: labelRect.bottom - listRect.top - 2,
    });
  }, [activeId]);

  useEffect(() => {
    measure();

    // Ширина подписей зависит от шрифта и языка — шрифт может доехать позже,
    // поэтому пересчитываем на ресайз списка и окна.
    const list = listRef.current;
    const observer =
      typeof ResizeObserver === "undefined" ? null : new ResizeObserver(measure);

    if (list && observer) observer.observe(list);
    window.addEventListener("resize", measure);

    return () => {
      observer?.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, [measure, langName]);

  return (
    <NavbarWrapper>
      {/* data-slider="off" (SSR и первый кадр) — линию активного пункта рисует
          CSS; "on" — её рисует бегунок. */}
      <NavbarList ref={listRef} data-slider={bar ? "on" : "off"}>
        {items.map((item) => (
          <NavbarItem key={item.id}>
            <Link
              href={item.href}
              data-active={isActive(pathname, item.href)}
              data-hover={hoveredId === item.id}
              onPointerEnter={handlePointerEnter(item.id)}
              onPointerLeave={handlePointerLeave}
              onPointerCancel={handlePointerLeave}
            >
              {item.value === "" ? <HomeIcon /> : item.icon}
              <NavLabel
                ref={(node) => {
                  labelRefs.current[item.id] = node;
                }}
              >
                {item.label}
              </NavLabel>
            </Link>
          </NavbarItem>
        ))}

        {bar && (
          <NavIndicator
            aria-hidden
            style={{
              transform: `translateX(${bar.left}px)`,
              width: bar.width,
              top: bar.top,
            }}
          />
        )}
      </NavbarList>
    </NavbarWrapper>
  );
};

export default Navbar;
