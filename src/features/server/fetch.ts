export const fetchRequest = async (
  url: string | URL,
  options?: RequestInit
): Promise<Response> => {
  const headers = {
    'Content-Type': 'application/json',
  };

  const res = await fetch(url, { headers, ...options });
  const status = res.status === 401 ? 412 : res.status;

  return new Response(res.body, { status, ...res });
};
