import type { NextApiRequest, NextApiResponse } from "next";

// Лайки хранятся в Upstash Redis (REST API): атомарный INCRBY — счётчик
// глобальный, источник истины только здесь. Переменные окружения:
//   UPSTASH_REDIS_REST_URL   — вида https://xxx.upstash.io
//   UPSTASH_REDIS_REST_TOKEN — токен из вкладки REST API базы
// Если переменных нет (не настроено) — отвечаем пустым объектом: клиент
// показывает 0 и ничего не затирает (см. likes-slice).

const REST_URL = process.env.UPSTASH_REDIS_REST_URL;
const REST_TOKEN = process.env.UPSTASH_REDIS_REST_TOKEN;

const keyFor = (id: string) => `likes:${id}`;

// Команда REST API: /get/<key> или /incrby/<key>/<delta>.
// Возвращает число или null (ключа ещё нет / ответ без result).
async function redis(path: string): Promise<number | null> {
  const res = await fetch(`${REST_URL}/${path}`, {
    headers: { Authorization: `Bearer ${REST_TOKEN}` },
    cache: "no-store",
  });
  if (!res.ok) throw new Error(`Upstash ${res.status}`);
  const data = (await res.json()) as { result?: string | null };
  return data.result == null ? null : Number(data.result);
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { id } = req.query;

  if (!id || Array.isArray(id)) {
    return res.status(400).json({ message: "Missing id" });
  }

  // Кэш браузера отключаем: счётчик всегда свежий
  res.setHeader("Cache-Control", "no-store");

  if (!REST_URL || !REST_TOKEN) {
    return res.status(200).json({}); // Upstash не настроен
  }

  const key = encodeURIComponent(keyFor(String(id)));

  try {
    if (req.method === "GET") {
      const value = await redis(`get/${key}`);
      // Ключа ещё нет — пустой объект (клиент оставит текущее значение)
      if (value == null) return res.status(200).json({});
      return res.status(200).json({ likes: value });
    }

    if (req.method === "POST") {
      // Атомарный инкремент на дельту; ответ — авторитетное значение счётчика
      const delta = Number(req.body?.value) || 0;
      const after = await redis(`incrby/${key}/${delta}`);
      return res.status(200).json({ likes: after ?? 0 });
    }

    return res.status(405).json({ message: "Method not allowed" });
  } catch (err) {
    console.error("Upstash error:", err);
    return res.status(200).json({}); // пустой объект — клиент не обнулится
  }
}
