import { Request, Response } from "express";
import path from "path";
import { GeminiService } from "../services";
import { extractTextFromImage } from "../services/tesseract.service";
import { generatePrompt } from "../helpers/prompt.helpers";

export const getRecommend = async (req: Request, res: Response) => {
  try {
    const { prompt } = req.body;
    if (!req.file) {
      throw new Error("No file uploaded");
    }

    const imagePath = req.file.path;
    const text = await extractTextFromImage(imagePath);
    const promptText = generatePrompt(text, prompt);

    const geminiRawResponse = await GeminiService.generateResponse(promptText);
    const message = geminiRawResponse.candidates[0].content.parts[0].text;

    res.status(200).json({ message });
  } catch (error) {
    console.error("Error in getRecommend:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
