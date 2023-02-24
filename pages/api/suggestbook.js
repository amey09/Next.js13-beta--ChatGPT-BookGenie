import { suggestBook } from "../../app/services/openai";

export default async function handler(req, res) {
  const { personality } = req.body;

  if (!personality) {
    return res.status(400).json({ message: "Missing personality parameter" });
  }

  try {
    const suggestion = await suggestBook(personality);
    return res.status(200).json({ suggestion });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}