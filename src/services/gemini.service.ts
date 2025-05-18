import { GoogleGenAI } from "@google/genai";
import config from "../config";

const ai = new GoogleGenAI({ apiKey: config.gemini.apiKey });

export const generateResponse = async (prompt: string) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.0-flash",
      contents: prompt,
    });
    return response;
  } catch (error) {
    console.error("Error generating response:", error);
    throw new Error("Failed to generate response");
  }
};
