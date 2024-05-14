import express from 'express';
import { auth } from '../controllers/auth.controller';
const router=express.Router();

router.post('/signin',auth.singIn)
router.post('/signup',auth.singUp)

export default router;