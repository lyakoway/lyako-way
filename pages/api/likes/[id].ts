import { MongoClient } from "mongodb";
import type { NextApiRequest, NextApiResponse } from "next";

const uri = process.env.MONGO_URI!;
const options = { connectTimeoutMS: 3000 }; // быстрый таймаут

// --- Глобальный кэш соединения для dev режима ---
let client: MongoClient;
let clientPromise: Promise<MongoClient>;

if (!global._mongoClientPromise) {
  client = new MongoClient(uri, options);
  global._mongoClientPromise = client.connect();
}

clientPromise = global._mongoClientPromise;

// --- Типизация глобала для TS ---
declare global {
  var _mongoClientPromise: Promise<MongoClient> | undefined;
}

// --- API-хендлер ---
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { id } = req.query;

  if (!id) {
    return res.status(400).json({ message: "Missing id" });
  }

  // --- Подключение к Mongo с обработкой ошибок ---
  let mongo: MongoClient;
  try {
    mongo = await clientPromise;
  } catch (err) {
    console.error("Mongo connection failed:", err);
    return res.status(200).json({ likes: 0 }); // fallback вместо 500
  }

  const db = mongo.db("likes_db");
  const collection = db.collection("likes");

  // --- Основная логика GET/POST ---
  try {
    if (req.method === "GET") {
      const item = await collection.findOne({ id });
      return res.status(200).json({ likes: item?.likes || 0 });
    }

    if (req.method === "POST") {
      const { value } = req.body;

      const result = await collection.findOneAndUpdate(
        { id },
        { $set: { likes: value } },
        { upsert: true, returnDocument: "after" }
      );

      return res.status(200).json({ likes: result.value?.likes ?? value });
    }

    return res.status(405).json({ message: "Method not allowed" });
  } catch (err) {
    console.error("Mongo DB error:", err);
    return res.status(200).json({ likes: 0 }); // fallback вместо 500
  }
}
