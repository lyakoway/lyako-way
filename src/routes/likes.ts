import { fetchRequest } from "src/features/server/fetch";

const BASE_URL = "/api/likes";

export async function getLikes({ id }: { id?: string }) {
  const url = `${BASE_URL}/${id}`;
  try {
    return await fetchRequest(url, { method: "GET" });
  } catch (error) {
    console.error("Ошибка при получении данных погоды:", error);
    throw error;
  }
}

export async function sendLike({ id, delta }: { id?: string; delta: number }) {
  const url = `${BASE_URL}/${id}`;
  const requestBody = JSON.stringify({ delta });
  try {
    return await fetchRequest(url, { method: "POST", body: requestBody });
  } catch (error) {
    console.error("Ошибка при получении данных погоды:", error);
    throw error;
  }
}
