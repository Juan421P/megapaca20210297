import model from '../models/reviews.js';
const controller = {
  get: async (req, res) => {
    const reviews = await model.find().populate();
    res.json(reviews);
  },
  post: async (req, res) => {
    const {
        comment, rating, product, employee
    } = req.body;
    const review = new model({
        comment, rating, product, employee
    });
    await review.save();
    res.json({
        message: 'review saved'
    });
  },
  delete: async (req, res) => {
    await model.findByIdAndDelete(req.params.id);
    res.json({
        message: 'review deleted'
    });
  },
  put: async (req, res) => {
    const {
        comment, rating, product, employee
    } = req.body; 
    await model.findByIdAndUpdate(req.params.id, {
        comment, rating, product, employee
    }, {
        new: true
    });
    res.json({
        message: 'review updated'
    });
  }
};
export default controller;