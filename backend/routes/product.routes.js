import express from 'express';
import { createProduct, getProducts , deleteProduct , updateProduct } from '../controllers/product.controllers.js';


const router = express.Router();
export default router;


router.get('/', getProducts)
router.post('/', createProduct);
router.delete('/:id', deleteProduct);
router.put('/:id',updateProduct);