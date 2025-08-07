export class CallApiError extends Error {
  status: number;
}

export async function getResponse<T>(response: Response): Promise<T> {
  if (response.ok) {
    return response.json() as Promise<T>;
  }

  let message: string;
  try {
    const errData = await response.json();
    message = errData.message || JSON.stringify(errData);
  } catch {
    message = await response.text();
  }
  throw new Error(`Ошибка ${response.status}: ${message}`);
}

export const requestBody = (body) => JSON.stringify(body);


