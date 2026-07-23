import { ElementType, PropsWithChildren } from "react";

import { useInView } from "src/features/customHooks";
import { RevealBox } from "./style";

interface RevealProps {
  /** Рендерить как другой тег/компонент (например "p" | "header" | Card). */
  as?: ElementType;
  /** Задержка появления, мс — для ступенчатого (staggered) списка. */
  delay?: number;
  /** Стартовый сдвиг снизу, px (по умолчанию 24). */
  y?: number;
  /** Стартовый сдвиг сбоку, px (напр. 64 — «выезд справа»). При задании
   *  обычно y=0. */
  x?: number;
  className?: string;
}

/**
 * Обёртка «плавного появления» при попадании во вьюпорт (только при скролле).
 * Остальные пропсы (onClick, type, href, …) форвардятся на нижележащий
 * элемент — чтобы можно было анимировать кликабельные элементы через `as`.
 */
export const Reveal = ({
  children,
  as,
  delay = 0,
  y = 24,
  x = 0,
  className,
  ...rest
}: PropsWithChildren<RevealProps> & Record<string, unknown>) => {
  const { ref, inView, animate } = useInView<HTMLDivElement>();

  return (
    <RevealBox
      ref={ref}
      as={as}
      $in={inView}
      $animate={animate}
      $delay={delay}
      $x={x}
      $y={y}
      className={className}
      {...(rest as Record<string, unknown>)}
    >
      {children}
    </RevealBox>
  );
};

export default Reveal;
