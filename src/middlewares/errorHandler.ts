import { Request, Response, NextFunction } from "express";
import { CustomError } from "../utils/createError";

const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.error("Hata yakalandı:", err.stack);

  if (err instanceof CustomError) {
    res.status(err.statusCode).json({
      success: false,
      error: err.errorType,
      message: err.message,
    });
    return;
  }

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
