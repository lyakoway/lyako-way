export function getMobile() {
  let UA = navigator.userAgent.toLowerCase();
  return /android|webos|iris|bolt|mobile|iphone|ipad|ipod|iemobile|blackberry|windows phone|opera mobi|opera mini/i.test(
    UA
  )
    ? true
    : false;
}
