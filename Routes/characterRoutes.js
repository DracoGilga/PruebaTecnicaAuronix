import { Router } from 'express';
import { getCharacters } from '../Controllers/characterController.js';

const router = Router();

router.get('/', getCharacters);

export default router;