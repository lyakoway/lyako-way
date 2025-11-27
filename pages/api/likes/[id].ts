import { MongoClient } from "mongodb";

const client = new MongoClient(process.env.MONGO_URI!);
const db = client.db("likes_db");
const collection = db.collection("likes");

export default async function handler(req, res) {
  const { id } = req.query;

  if (!id) return res.status(400).json({ message: "Missing id" });

  await client.connect();

  if (req.method === "GET") {
    const item = await collection.findOne({ id });
    return res.status(200).json({ likes: item?.likes || 0 });
  }

  if (req.method === "POST") {
    const { delta } = req.body;

    const result = await collection.findOneAndUpdate(
      { id },
      { $inc: { likes: delta } },
      { returnDocument: "after", upsert: true }
    );

    return res.status(200).json({ likes: result.likes });
  }

  res.status(405).json({ message: "Method not allowed" });
}
