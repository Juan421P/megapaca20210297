import express from 'express';
import controller from '../controllers/clientLogin.js';
const router = express.Router();
router.route('/')
    .post(controller.login)
export default router;