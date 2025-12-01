import { getResponse } from "src/api";

export const fetchRequest = async <T>(
  url: string | URL,
  options?: RequestInit
): Promise<T> => {
  if (!url) {
    throw new Error("fetchRequest: url is undefined");
  }

  const strUrl = typeof url === "string" ? url : url.toString();

  // корректно собираем headers
  const baseHeaders: Record<string, string> = {
    "Content-Type": "application/json",
  };

  let headers: Record<string, string> = { ...baseHeaders };

  if (options?.headers instanceof Headers) {
    options.headers.forEach((value, key) => {
      headers[key] = value;
    });
  } else if (options?.headers) {
    headers = {
      ...headers,
      ...(options.headers as Record<string, string>),
    };
  }

  const res = await fetch(strUrl, {
    ...options,
    method: options?.method || "GET",
    headers,
  });

  return getResponse(res);
};
