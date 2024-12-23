// import { ALL_NEWS, DETAIL_NEWS } from "../config"
import { fetchRequest } from "src/features/server/fetch";
const getResponse = (response) =>
  response.ok ? response.json() : Promise.reject(response.status);

const requestBody = JSON.stringify({
  externalId: "externalId",
  phone: "phone",
});

const getNewsAllIds = async () => {
  try {
    const response = await fetchRequest("/", {
      method: "POST",
      body: requestBody,
    });
    return getResponse(response);
  } catch (error) {
    console.warn(`Ошибка: ${error.status}, ${error.message}`);
  }
};

const getItem = async (id) => {
  const response = await fetch(DETAIL_NEWS(id));
  return getResponse(response);
};

export { getNewsAllIds, getItem };
