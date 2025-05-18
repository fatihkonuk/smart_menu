import { Router } from "express";
import RecommendRoutes from "./recommend.routes";
import AuthRoutes from "./auth.routes";

const router = Router();

router.use("/recommend", RecommendRoutes);
router.use("/auth", AuthRoutes);

export default router;