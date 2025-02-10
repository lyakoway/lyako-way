export const getParallax = (
  e: { clientX: number; clientY: number },
  nameParallax: string
) => {
  const dataParallax = Array.from(
    document?.querySelectorAll<HTMLElement>(`[${nameParallax}]`)
  );
  if (dataParallax) {
    const speedSun = dataParallax?.[0]?.getAttribute(nameParallax);
    const biasXSun = (e.clientX * Number(speedSun)) / 1000;
    const biasYSun = (e.clientY * Number(speedSun)) / 1000;
    if (dataParallax?.[0]) {
      dataParallax[0].style.transform = `translateX(${biasXSun}px) translateY(${biasYSun}px)`;
    }
  }
};
