// Единые цвета для панелей оболочки (сайдбар, навбар, карточки разделов).
// Панели — сланцевые (theme.color.background.primaryHeaderWrapper), поэтому
// текст и подложки светлые/полупрозрачные и одинаково работают в обеих темах.
export const PANEL_TEXT = "#ffffff";
// Уровни прозрачности подобраны так, чтобы даже на самой светлой панели
// (light-тема, #5b6774) мелкий текст проходил WCAG AA (≥4.5:1):
// secondary ≈ 5:1, muted ≈ 4.75:1. Иерархия сохраняется за счёт размера/начертания.
export const PANEL_TEXT_SECONDARY = "rgba(255, 255, 255, 0.9)";
export const PANEL_TEXT_MUTED = "rgba(255, 255, 255, 0.86)";
export const PANEL_BORDER = "rgba(255, 255, 255, 0.14)";
// Вложенные (приподнятые) блоки поверх панели: чуть светлее фона панели.
export const PANEL_ELEVATED = "rgba(255, 255, 255, 0.07)";
export const PANEL_ELEVATED_HOVER = "rgba(255, 255, 255, 0.12)";
