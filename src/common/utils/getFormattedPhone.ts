const getFormattedPhone = (phone: string): string => {
  const replacer = (
    str: string,
    p1: string,
    p2: string,
    p3: string,
    p4: string
  ) => `+7 ${p1} ${p2}-${p3}-${p4}`;

  const threeNums = "(\\d{3})";
  const twoNums = "(\\d{2})";

  return phone
    ? phone
        .replace(/\D/g, "")
        .replace(/^7/, "")
        .substring(0, 10)
        .replace(
          new RegExp(threeNums + threeNums + twoNums + twoNums),
          replacer
        )
    : "";
};

export default getFormattedPhone;
