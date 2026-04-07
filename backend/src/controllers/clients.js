import model from '../models/clients.js';
const controller = {
    get: async (req, res) => {
        try {
            const clients = await model.find();
            res.status(200).json(clients);
        } catch (error) {
            res.status(500).json({
                message: 'error retrieving clients',
                error: error.message
            });
        }
    },
    delete: async (req, res) => {
        try {
            const client = await model.findByIdAndDelete(req.params.id);
            if (!client) {
                return res.status(404).json({
                    message: 'client not found'
                });
            }
            return res.status(200).json({
                message: 'client deleted'
            });
        } catch (error) {
            res.status(500).json({
                message: 'error deleting client',
                error: error.message
            });
        }
    },
    put: async (req, res) => {
        try {
            let {
                name, lastname, birthdate, email, password, isVerified, loginAttempts, timeout
            } = req.body;
            name = name?.trim();
            email = email?.trim();
            if (!name || !email || !password) {
                return res.status(400).json({
                    message: 'fields required'
                });
            }
            if (birthdate > new Date || birthdate < new Date('1901-01-01')) {
                return res.status(400).json({
                    message: 'invalid date'
                });
            }
            const client = await model.findByIdAndUpdate(
                req.params.id, {
                name, lastname, birthdate, email, password, isVerified, loginAttempts, timeout
            }, {
                new: true
            });
            if (!client) {
                return res.status(404).json({
                    message: 'client not found'
                });
            }
            return res.status(200).json({
                message: 'client updated',
                client
            });
        } catch (error) {
            res.status(500).json({
                message: 'error updating client',
                error: error.message
            });
        }
    }
};
export default controller;