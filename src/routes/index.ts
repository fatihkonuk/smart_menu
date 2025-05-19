import { Router } from "express";
import RecommendRoutes from "./recommend.routes";
import AuthRoutes from "./auth.routes";
import { TokenHandler } from "../middlewares";
import MeRoutes from "./me.routes";

const router = Router();

router.use("/recommend", TokenHandler(), RecommendRoutes);
router.use("/me", TokenHandler(true), MeRoutes);
router.use("/auth", AuthRoutes);

export default router;
