export const getParallax = (
  e: { clientX: number; clientY: number },
  nameParallax: string,
  biasX: number,
  biasY: number
) => {
  const dataParallax = Array.from(
    document?.querySelectorAll<HTMLElement>(`[${nameParallax}]`)
  );
  if (dataParallax) {
    const speedSun = dataParallax?.[0]?.getAttribute(nameParallax);
    const biasXSun = (e.clientX * Number(speedSun)) / biasX;
    const biasYSun = (e.clientY * Number(speedSun)) / biasY;
    if (dataParallax?.[0]) {
      dataParallax[0].style.transform = `translateX(${-biasXSun}px) translateY(${-biasYSun}px)`;
    }
  }
};
