import nodemailer from 'nodemailer';
import crypto from 'crypto';
import jsonwebtoken from 'jsonwebtoken';
import bcryptjs from 'bcryptjs';
import model from '../models/clients.js';
const controller = {
    post: async (req, res) => {
        const {
                name, lastname, birthdate, email, password, isVerified
        } = req.body;
        try {
            
        } catch (error) {
            
        }
    }
};
export default controller;