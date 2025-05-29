import getPhoneRaw from "src/common/utils/getPhoneRaw";
import { ContactFormProps } from "src/common/types/lang";

const existedOperatorCodes = [
  "900-906",
  "908-934",
  "936-939",
  "941-941",
  "950-956",
  "958-958",
  "960-971",
  "977-978",
  "980-989",
  "991-997",
  "999-999",
];

const isOperatorExist = (phone: string): boolean => {
  const operator = Number(phone.slice(0, 3));
  const intervals = existedOperatorCodes.map((interval) => interval.split("-"));
  const interval = intervals.find(
    ([start, end]) => operator >= Number(start) && operator <= Number(end)
  );
  return interval !== undefined;
};

const getValidateErrorTextPhone = (
  changePhone?: string,
  contactForm?: ContactFormProps
): string => {
  const clearedPhone = getPhoneRaw(changePhone);
  const isNotEmpty = Boolean(clearedPhone);
  if (isNotEmpty && clearedPhone.length < 10) {
    return contactForm.errorDescriptionPhoneLength;
  }
  if (
    clearedPhone.length === 10 &&
    !isOperatorExist(clearedPhone) &&
    contactForm.errorDescriptionPhoneOperator
  ) {
    return contactForm.errorDescriptionPhoneOperator;
  }
  return "";
};

getValidateErrorTextPhone.defaultProps = {
  changePhone: "",
  langName: "russia",
};

export default getValidateErrorTextPhone;
