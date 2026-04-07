import { Schema, model } from 'mongoose';
const schema = new Schema({
    name: {
        type: String
    },
    lastname: {
        type: String
    },
    birthdate: {
        type: Date
    },
    email: {
        type: String
    },
    password: {
        type: String
    },
    isVerified: {
        type: Boolean
    },
    loginAttempts: {
        type: Number
    },
    timeout: {
        type: Date
    }
}, {
    timestamps: true,
    strict: false
});
export default model('clients', schema);