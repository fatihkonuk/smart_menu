# Akıllı Menü (Smart Menu)

Akıllı Menü, restoran menülerinden alınan görseller üzerinden OCR (Optik Karakter Tanıma) teknolojisi ile metin çıkaran ve kullanıcının alerji, yaş, cinsiyet gibi bilgilerine göre güvenli yemek önerileri sunan bir Node.js tabanlı web API projesidir.

## Özellikler
- Menü görselinden otomatik metin çıkarma (Tesseract.js ile)
- Kullanıcı kaydı, giriş ve profil yönetimi
- Kullanıcıya özel alerji, yaş ve cinsiyet bilgilerine göre yemek önerisi
- Google Gemini AI ile akıllı öneri ve açıklama üretimi
- MongoDB ile kullanıcı ve oturum yönetimi
- Resim yükleme ve güvenlik kontrolleri

## Kurulum
1. **Depoyu klonlayın:**
   ```zsh
   git clone <repo-url>
   cd smart_menu
   ```
2. **Bağımlılıkları yükleyin:**
   ```zsh
   npm install
   ```
3. **Çevresel değişkenleri ayarlayın:**
   `.env` dosyası oluşturup aşağıdaki değişkenleri girin:
   ```env
   PORT=3000
   MONGODB_URI=<MongoDB bağlantı adresiniz>
   GEMINI_API_KEY=<Google Gemini API anahtarınız>
   ```
4. **Projeyi başlatın:**
   ```zsh
   npm run dev
   ```

## Kullanım
- `/api/auth/register` : Kullanıcı kaydı
- `/api/auth/login` : Giriş
- `/api/me` : Profil görüntüleme/güncelleme
- `/api/recommend` : Menü görseli ve alerji bilgisi ile öneri alma (POST, `image` dosya alanı ile)

## Teknolojiler
- Node.js, Express.js
- TypeScript
- MongoDB, Mongoose
- Tesseract.js (OCR)
- Google Gemini AI
- Multer (dosya yükleme)