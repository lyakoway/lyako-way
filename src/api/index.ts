export class CallApiError extends Error {
  status: number;
}

export async function getResponse(response: Response) {
  if (response.ok) {
    // Успешный ответ всегда пробуем как JSON
    try {
      return await response.json();
    } catch {
      return null;
    }
  }

  // Ошибка → читаем тело 1 раз
  const raw = await response.text();

  let message = raw;
  try {
    const json = JSON.parse(raw);
    message = json.message || raw;
  } catch {
    /* игнорируем, raw остаётся текстом */
  }

  throw new Error(`Ошибка ${response.status}: ${message}`);
}

export const requestBody = (body) => JSON.stringify(body);
