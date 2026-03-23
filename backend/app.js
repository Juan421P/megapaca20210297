import express from 'express';
import products from './src/routes/products.js'
import branches from './src/routes/branches.js';
const app = express();
app.use(express.json());
app.use('/api/products', products);
app.use('/api/branches', branches);
export default app;