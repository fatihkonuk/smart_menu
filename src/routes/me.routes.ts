import { Router } from 'express';
import { MeController } from '../controllers';

const router = Router();

router.get('/', MeController.getMe);
router.put('/', MeController.updateMe);

export default router;