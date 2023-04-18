export const setCookie = (name: string, value: any, days: number) => {
  const expires = new Date();
  expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
  document.cookie =
    name +
    "=" +
    encodeURIComponent(value) +
    ";expires=" +
    expires.toUTCString() +
    ";path=/";
};
export const getCookie = (name: string) => {
  const cookieMatch = document.cookie.match(
    new RegExp("(^| )" + name + "=([^;]+)")
  );
  if (cookieMatch) {
    return decodeURIComponent(cookieMatch[2]);
  } else {
    return null;
  }
};
export const deleteCookie = (name: string) => {
  document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:01 GMT;";
};
