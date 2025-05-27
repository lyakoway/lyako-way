import getNumericValue from "src/common/utils/getNumericValue";

const getPhoneRaw = (value = "") => getNumericValue(value)?.replace(/^7/, "");
export default getPhoneRaw;
