import express from 'express';
const app = express();
app.use(express.json());
app.use('/api/products');
export default app;