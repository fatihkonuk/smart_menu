import { NextFunction, Request, Response } from "express";

export default (req: Request, res: Response, next: NextFunction) => {
  const start = Date.now();
  const { method, url } = req;
  const { statusCode } = res;

  res.on("finish", () => {
    const duration = Date.now() - start;
    const adjustedDate = new Date();
    adjustedDate.setHours(adjustedDate.getHours() + 3);
    console.log(`[${adjustedDate.toISOString()}] ${method} ${url} ${statusCode} - ${duration}ms`);
  });

  next();
};
