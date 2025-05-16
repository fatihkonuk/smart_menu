export const generatePrompt = (menuText: string, allergies: string): string => {
  return `
    You are a helpful AI assistant for a restaurant recommendation system.

    Below is the full menu text extracted from an image using OCR:

    "${menuText}"

    The user has the following allergies or sensitivities:

    "${allergies}"

    Based on the menu and the user's allergies, do the following:

    1. Analyze the menu and **exclude all items that may contain any of the ingredients the user is allergic to**.
    2. From the safe options, suggest **1–2 dishes** the user can eat.
    3. Clearly explain why these suggestions are safe.
    4. Warn about **any suspicious or ambiguous items** that may still pose a risk based on common ingredients.

    Respond in Turkish.
    Response:
  `;
};
