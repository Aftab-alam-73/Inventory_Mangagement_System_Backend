import express from 'express';
import { singIn, singUp } from '../controllers/auth';

const router=express.Router();

router.post('/signin',singIn)
router.post('/signup',singUp)

export default router;