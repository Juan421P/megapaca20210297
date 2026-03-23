import { Schema, model } from 'mongoose';
const schema = new Schema({
    name:{
        type: String
    },
    address:{
        type: String
    },
    schedule: {
        type: Number
    },
    isActive: {
        type: Number
    }
}, {
    timestamps: true,
    strict: false
});
export default model('branches', schema);