import { Router } from 'express';
import RecommendRoutes from './recommend.routes';

const router = Router();

router.use('/recommend', RecommendRoutes);

export default router;