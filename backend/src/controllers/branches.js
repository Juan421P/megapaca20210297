import model from '../models/branches.js';
const controller = {
  get: async (req, res) => {
    const branches = await model.find();
    res.json(branches);
  },
  post: async (req, res) => {
    const {
        name, address, schedule, isActive
    } = req.body;
    const branch = new model({
        name, address, schedule, isActive
    });
    await branch.save();
    res.json({
        message: 'branch saved'
    });
  },
  delete: async (req, res) => {
    await model.findByIdAndDelete(req.params.id);
    res.json({
        message: 'branch deleted'
    });
  },
  put: async (req, res) => {
    const {
        name, address, schedule, isActive
    } = req.body;
    await model.findByIdAndUpdate(req.params.id, {
        name, address, schedule, isActive
    }, {
        new: true
    });
    res.json({
        message: 'branch updated'
    });
  }
};
export default controller;