import { createWorker } from "tesseract.js";

export const extractTextFromImage = async (imagePath, lang = "tur") => {
  const worker = await createWorker(lang);
  const { data } = await worker.recognize(imagePath);
  await worker.terminate();
  return data.text;
};
