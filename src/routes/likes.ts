import mongoose from "mongoose";
import type { NextApiRequest, NextApiResponse } from "next";

const LikeSchema = new mongoose.Schema({
  url: { type: String, unique: true },
  count: { type: Number, default: 0 },
});

const Like = mongoose.models.Like || mongoose.model("Like", LikeSchema);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    await mongoose.connect(process.env.MONGO_URI!);
  } catch (err) {
    console.error("Ошибка подключения к MongoDB:", err);
    return res.status(500).json({ message: "DB connection error" });
  }

  if (req.method === "POST") {
    const { url } = req.body;
    const doc = await Like.findOneAndUpdate(
      { url },
      { $inc: { count: 1 } },
      { new: true, upsert: true }
    );
    return res.status(200).json({ count: doc.count });
  }

  if (req.method === "GET") {
    const { url } = req.query;
    const doc = await Like.findOne({ url });
    return res.status(200).json({ count: doc?.count || 0 });
  }

  res.status(405).json({ message: "Method not allowed" });
}
