const getValidateErrorTextMail = (
  changeMail?: string,
  langName?: string
): string => {
  const validateParamsPatternShortMail =
    /^\s*([a-z0-9_.-]+\.)*[a-z0-9_.-]*([a-z0-9]\b)+(@[a-z0-9_-]{2,})+(\.([a-z0-9_-]{2,})+)*\.[a-z]{2,}\s*$/i;
  const validateParamsPatternLongMail =
    /^(\b[a-z0-9])\s*([a-z0-9_.-]+\.)*[a-z0-9_.-]*([a-z0-9]\b)+(@[a-z0-9_-]{2,})+(\.([a-z0-9_-]{2,})+)*\.[a-z]{2,}\s*$/i;
  const validateParamsPattern =
    changeMail?.split("@")?.[0]?.length > 1
      ? validateParamsPatternLongMail
      : validateParamsPatternShortMail;
  const changeInputValidate = changeMail
    .toLowerCase()
    .match(validateParamsPattern);
  const changeMailLengthSymbolsLimit = 64;
  const lengthSymbolsLimit = changeMail?.length < changeMailLengthSymbolsLimit;
  const eMailDomainLevel =
    changeMail?.split("@")?.pop()?.split(".")?.length < 4;

  if (!changeInputValidate || !eMailDomainLevel) {
    return langName === "russia" ? "Проверьте Email" : "Check Email";
  }
  if (!lengthSymbolsLimit) {
    return langName === "russia"
      ? "Электронная почта слишком длинная"
      : "The email is too long";
  }
  return "";
};

getValidateErrorTextMail.defaultProps = {
  changeMail: "",
};

export default getValidateErrorTextMail;
