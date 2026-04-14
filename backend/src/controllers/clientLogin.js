import model from '../models/clients.js';
import bcrypt from 'bcryptjs';
import jsonwebtoken from 'jsonwebtoken';
import { config } from '../../config.js';
import c from './clients.js';
const controller = {
    login: async (req, res) => {
        const {
            email, password
        } = req.body;
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email || !regex.test(email)) {
            return res.status(400).json({
                message: "invalid email"
            });
        }
        try {
            const client = await model.findOne({ email });
            if (!client) return res.status(400).json({
                message: 'client not found'
            });
            if (client.timeout && client.timeout > Date.now()) return res.status(403).json({
                message: 'account blocked'
            });
            const match = await bcrypt.compare(password, client.password);
            if (!match) client.loginAttempts = (client.loginAttempts || 0) + 1;
            if (client.loginAttempts >= 3) {
                client.timeout = Date.now() + 5 * 60 * 1000;
                client.loginAttempts = 0;
                await client.save();
                return res.status(403).json({
                    message: 'account blocked for too many failed login attempts'
                });
            }
            client.loginAttempts = 0;
            client.timeout = null;
            const token = jsonwebtoken.sign({
                id: client._id, userType: 'client'
            }, config.jwt.secret, {
                expiresIn: '30d'
            });
            res.cookie('auth', token);
            return res.status(200).json({
                message: 'login exitoso'
            });
        } catch (error) {
            return res.status(500).json({
                message: 'internal server error'
            });
        }
    }
};
export default controller;