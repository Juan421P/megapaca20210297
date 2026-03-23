import { Schema, model } from 'mongoose';
const schema = new Schema({
    name:{
        type: String
    },
    lastName:{
        type: String
    },
    salary: {
        type: Number
    },
    dui: {
        type: String
    },
    phone: {
        type: Number
    },
    email: {
        type: String
    },
    password: {
        type: String
    },
    branch: {
        type: Schema.Types.ObjectId,
        ref: "branches"
    }
}, {
    timestamps: true,
    strict: false
});
export default model('employees', schema);