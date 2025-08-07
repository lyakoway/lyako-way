import {getResponse} from "src/api";

export const fetchRequest = async <T>(
    url: string | URL,
    options?: RequestInit
): Promise<T> => {
  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
    ...(options?.headers as Record<string, string>),
  };

  const res = await fetch(url.toString(), {
    ...options,
    method: options?.method || 'GET',
    headers,
  });

  return getResponse(res);
};
