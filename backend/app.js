import express from 'express';
import products from './src/routes/products.js'
import branches from './src/routes/branches.js';
import employees from './src/routes/employees.js';
import reviews from './src/routes/reviews.js';
const app = express();
app.use(express.json());
app.use('/api/products', products);
app.use('/api/branches', branches);
app.use('/api/employees', employees);
app.use('/api/reviews', reviews);
export default app;