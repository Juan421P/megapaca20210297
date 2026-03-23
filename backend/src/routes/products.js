import express from 'express';
import controller from '../controllers/products.js';
const router = express.Router();
router.route('/')
.get(controller.get)
.post(controller.post);
router.route('/:id')
.put(controller.put)
.delete(controller.delete);
export default router;