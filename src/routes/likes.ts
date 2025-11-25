import mongoose, { Document, Model, Schema } from "mongoose";
import type { NextApiRequest, NextApiResponse } from "next";

// Интерфейс документа Like
interface ILike extends Document {
  url: string;
  count: number;
}

// Схема
const LikeSchema: Schema<ILike> = new Schema({
  url: { type: String, required: true, unique: true },
  count: { type: Number, default: 0 },
});

// Модель
const Like: Model<ILike> =
  mongoose.models.Like || mongoose.model<ILike>("Like", LikeSchema);

// Функция для безопасного подключения к MongoDB
async function connectToDatabase() {
  if (mongoose.connections[0].readyState) return; // Уже подключено
  try {
    await mongoose.connect(process.env.MONGO_URI!);
    console.log("✅ MongoDB connected");
  } catch (err) {
    console.error("Ошибка подключения к MongoDB:", err);
    throw err;
  }
}

// API handler
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<{ count?: number; message?: string }>
) {
  try {
    await connectToDatabase();
  } catch {
    return res.status(500).json({ message: "DB connection error" });
  }

  const url = (req.method === "POST" ? req.body.url : req.query.url) as string;

  if (!url) return res.status(400).json({ message: "URL is required" });

  if (req.method === "POST") {
    try {
      const doc = await Like.findOneAndUpdate(
        { url },
        { $inc: { count: 1 } },
        { new: true, upsert: true }
      );
      return res.status(200).json({ count: doc.count });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ message: "Error updating like" });
    }
  }

  if (req.method === "GET") {
    try {
      const doc = await Like.findOne({ url });
      return res.status(200).json({ count: doc?.count || 0 });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ message: "Error fetching like" });
    }
  }

  res.status(405).json({ message: "Method not allowed" });
}
