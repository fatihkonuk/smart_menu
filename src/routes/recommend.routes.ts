import { Router } from "express";
import { RecommendController } from "../controllers";
import upload from "../middlewares/fileUpload";

const router = Router();

router.post("/", upload.single('image'), RecommendController.getRecommend);

export default router;
