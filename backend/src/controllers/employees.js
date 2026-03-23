import model from '../models/employees.js';
const controller = {
  get: async (req, res) => {
    const employees = await model.find().populate();
    res.json(employees);
  },
  post: async (req, res) => {
    const {
        name, lastName, salary, dui, phone, email, password, branch
    } = req.body;
    const employee = new model({
        name, lastName, salary, dui, phone, email, password, branch
    });
    await employee.save();
    res.json({
        message: 'employee saved'
    });
  },
  delete: async (req, res) => {
    await model.findByIdAndDelete(req.params.id);
    res.json({
        message: 'employee deleted'
    });
  },
  put: async (req, res) => {
    const {
        name, lastName, salary, dui, phone, email, password, branch
    } = req.body; 
    await model.findByIdAndUpdate(req.params.id, {
        name, lastName, salary, dui, phone, email, password, branch
    }, {
        new: true
    });
    res.json({
        message: 'employee updated'
    });
  }
};
export default controller;