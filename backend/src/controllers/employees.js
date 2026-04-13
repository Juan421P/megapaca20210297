import model from '../models/employees.js';
const controller = {
	get: async (req, res) => {
		try {
			const employees = await model.find();
			res.status(200).json(employees);
		} catch (error) {
			res.status(500).json({
				message: 'error retrieving employees',
				error: error.message
			});
		}
	},
	delete: async (req, res) => {
		try {
			const employee = await model.findByIdAndDelete(req.params.id);
			if (!employee) {
				return res.status(404).json({
					message: 'employee not found'
				});
			}
			return res.status(200).json({
				message: 'employee deleted'
			});
		} catch (error) {
			res.status(500).json({
				message: 'error deleting employee',
				error: error.message
			});
		}
	},
	put: async (req, res) => {
		try {
			let {
				name, lastname, salary, dui, phone, email, password, branch, isVerified
			} = req.body;
			name = name?.trim();
			email = email?.trim();
			if (!name || !email || !password) {
				return res.status(400).json({
					message: 'fields required'
				});
			}
			const employee = await model.findByIdAndUpdate(
				req.params.id, {
				name, lastname, salary, dui, phone, email, password, branch, isVerified
			}, {
				new: true
			});
			if (!employee) {
				return res.status(404).json({
					message: 'employee not found'
				});
			}
			return res.status(200).json({
				message: 'employee updated',
				employee
			});
		} catch (error) {
			res.status(500).json({
				message: 'error updating employee',
				error: error.message
			});
		}
	}
};
export default controller;