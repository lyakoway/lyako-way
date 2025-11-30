// utils/isNewYearPeriod.ts
export const isNewYearPeriod = () => {
  const now = new Date();
  const month = now.getMonth(); // 0=Jan, 11=Dec
  const day = now.getDate();

  // Декабрь целиком
  if (month === 11) return true;

  // Январь до 31 числа
  if (month === 0 && day <= 31) return true;

  return false;
};
