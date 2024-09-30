export function getMobile() {
  if (typeof window === "undefined") {
    return null;
  }

  let UA = window?.navigator?.userAgent?.toLowerCase();
  return /android|webos|iris|bolt|mobile|iphone|ipad|ipod|iemobile|blackberry|windows phone|opera mobi|opera mini/i.test(
    UA
  )
    ? true
    : false;
}
