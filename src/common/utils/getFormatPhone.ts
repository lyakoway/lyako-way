export const formatPhone = (input: string): string => {
  const digits = input.replace(/\D/g, "").replace(/^8|^7/, "");

  let result = "+7";
  if (digits.length > 0) result += " (" + digits.slice(0, 3);
  if (digits.length >= 4) result += ") " + digits.slice(3, 6);
  if (digits.length >= 7) result += "-" + digits.slice(6, 8);
  if (digits.length >= 9) result += "-" + digits.slice(8, 10);

  return result.slice(0, 18); // ограничим длину
};
