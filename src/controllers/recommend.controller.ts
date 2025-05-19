import { Request, Response } from "express";
import path from "path";
import { GeminiService } from "../services";
import { extractTextFromImage } from "../services/tesseract.service";
import { generatePrompt } from "../helpers/prompt.helpers";
import { marked } from "marked";
import { createError, ErrorTypes } from "../utils/createError";

export const getRecommend = async (req: any, res: Response) => {
  const { prompt } = req.body;
  const user = req.user
  
  if (!req.file) {
    throw createError("No file uploaded", ErrorTypes.BadRequestError);
  }
  if (!user && !prompt) {
    throw createError("Prompt is required", ErrorTypes.BadRequestError);
  }

  const imagePath = req.file.path;
  const text = await extractTextFromImage(imagePath);
  const promptText = generatePrompt(text, prompt, user);

  const geminiRawResponse = await GeminiService.generateResponse(promptText);
  const message = geminiRawResponse.candidates[0].content.parts[0].text;
  const htmlOutput = marked.parse(message);

  res.status(200).json({ message: htmlOutput });
};
