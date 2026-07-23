import { ElementType, PropsWithChildren } from "react";

import { useInView } from "src/features/customHooks";
import { RevealBox } from "./style";

interface RevealProps {
  /** Рендерить как другой тег (например "section" | "header" | "li"). */
  as?: ElementType;
  /** Задержка появления, мс — для ступенчатого (staggered) списка. */
  delay?: number;
  /** Стартовый сдвиг снизу, px (по умолчанию 24). */
  y?: number;
  className?: string;
}

/**
 * Обёртка «плавного появления» элемента при попадании во вьюпорт.
 * Пример списка со ступенчатым появлением:
 *   items.map((it, i) => <Reveal key={it.id} delay={i * 90}>...</Reveal>)
 */
export const Reveal = ({
  children,
  as,
  delay = 0,
  y = 24,
  className,
}: PropsWithChildren<RevealProps>) => {
  const { ref, inView, animate } = useInView<HTMLDivElement>();

  return (
    <RevealBox
      ref={ref}
      as={as}
      $in={inView}
      $animate={animate}
      $delay={delay}
      $y={y}
      className={className}
    >
      {children}
    </RevealBox>
  );
};

export default Reveal;
