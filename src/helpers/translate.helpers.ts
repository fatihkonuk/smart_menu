import axios from "axios";

export const translateText = async (text, targetLang = "tr") => {
  const res = await axios.get("https://api.mymemory.translated.net/get", {
    params: {
      q: text,
      langpair: `tr|${targetLang}`,
    },
  });
  return res.data.responseData.translatedText;
};
