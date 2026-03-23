import model from '../models/products.js';
const controller = {
  get: async (res) => {
    const products = await model.find();
    res.json(products);
  },
  get: async (req, res) => {
	const product = await model.findById(req.params.id);
	res.json(product);
  },
  post: async (req, res) => {
	const {
		name, description, price, stock
	} = req.body;
	const product = new model({
		name, description, price, stock
	});
	await product.save();
	res.json({
		message: 'product saved'
	});
  },
  delete: async (req, res) => {
	await model.findByIdAndDelete(req.params.id);
	res.json({
		message: 'product deleted'
	});
  },
  put: async (req, res) => {
	const {
		name, description, price, stock
	} = req.body;
	await model.findByIdAndUpdate(req.params.id, {
		name, description, price, stock
	}, {
		new: true
	});
	res.json({
		message: 'product updated'
	});
  }
};
export default controller;