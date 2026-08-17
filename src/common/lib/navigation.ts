// Значение пункта меню (propsHeaderTopMenu.value) → реальный роут Next.
// Пункты без записи здесь (cooperation) в навбар не попадают.
// Помимо Navbar используется анимацией переходов (PageTransition): порядок
// разделов для направления «слайда» берётся из propsHeaderTopMenu, а не из
// порядка ключей этой карты.
export const ROUTE_BY_VALUE: Record<string, string> = {
  "": "/",
  person: "/profile",
  resume: "/cv",
  services: "/services",
  portfolio: "/portfolio",
  blog: "/blog",
  contacts: "/contacts",
};
