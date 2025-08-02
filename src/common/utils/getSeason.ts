export const getSeason = (
  date: Date = new Date()
): "winter" | "spring" | "summer" | "autumn" => {
  const month = date.getMonth() + 1; // 1-12
  const day = date.getDate();

  if ((month === 12 && day >= 1) || month === 1 || month === 2) {
    return "winter";
  } else if ((month === 3 && day >= 1) || month === 4 || month === 5) {
    return "spring";
  } else if ((month === 6 && day >= 1) || month === 7 || month === 8) {
    return "summer";
  } else {
    return "autumn";
  }
};
