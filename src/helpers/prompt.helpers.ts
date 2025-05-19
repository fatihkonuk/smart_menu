import { User } from "../types/user.types";

export const generatePrompt = (
  menuText: string,
  allergies: string,
  user?: User
): string => {
  const menuSection = `Aşağıda bir görüntüden OCR ile çıkarılmış menü metni yer almaktadır:\n\n"${menuText}"`;
  const allergyInfo = user
    ? `"${user.fullName}" adlı kullanıcının alerji veya hassasiyetleri şunlardır:\n\n"${user.allergies}"`
    : `Kullanıcının alerji veya hassasiyetleri şunlardır:\n\n"${allergies}"`;

  const userInfo = user
    ? `Kullanıcı Bilgileri:\n- Ad: ${user.fullName}\n- Yaş: ${
        user.age
      }\n- Cinsiyet: ${user.gender === 1 ? "Erkek" : "Kadın"}`
    : "";

  const instructions = `
    Yukarıdaki menü ve alerji bilgilerine göre aşağıdakileri yap:

    1. Kullanıcının alerjisi olan maddeleri içerebilecek tüm yemekleri **hariç tut**.
    2. Güvenli seçenekler arasından **1 ila 2 yemek öner**.
    3. Bu önerilerin neden güvenli olduğunu **açıkça belirt**.
    4. İçeriği belirsiz veya şüpheli olan yemekler hakkında **uyarıda bulun**.
    ${
      user
        ? "5. Yanıtta kullanıcının adını geçir. Kullanıcının yaş ve cinsiyetine uygun önerilerde bulun."
        : ""
    }

    Yanıtı **Türkçe** olarak ver.
  `;

  return [
    "Sen bir restoran öneri sistemi için yardımcı bir yapay zekâ asistanısın.",
    menuSection,
    allergyInfo,
    userInfo,
    instructions.trim(),
    "Yanıt:",
  ]
    .filter(Boolean)
    .join("\n\n");
};
