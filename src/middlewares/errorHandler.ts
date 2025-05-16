import { Request, Response, NextFunction } from "express";

const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.error("Hata yakalandı:", err.stack);

  // Özel hata türlerine göre ayarlamalar
  if (err.name === "ValidationError") {
    res.status(400).json({
      success: false,
      error: "Geçersiz veri girişi",
      details: err.message,
    });
    return;
  }

  // Genel hata yanıtı
  res.status(500).json({
    success: false,
    error: "Sunucu hatası",
    message: err.message || "Beklenmeyen bir hata oluştu",
  });
};

export default errorHandler;