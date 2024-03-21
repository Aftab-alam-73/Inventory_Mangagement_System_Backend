import express from 'express';
import { addProduct, getAllProducts, getSingleProduct, removeProduct, updateProduct } from '../controllers/inventory.js';
import {verifyToken} from '../jwt.js'

const router =express.Router();

router.get('/',getAllProducts)
router.get('/:id',getSingleProduct)
router.post('/addProduct',verifyToken,addProduct)
router.delete('/:id',verifyToken,removeProduct)
router.put('/updateProduct',verifyToken,updateProduct)

export default router;