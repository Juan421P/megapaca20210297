import { Schema, model } from 'mongoose';
const schema = new Schema({
    comment: {
        type: String
    },
    rating: {
        type: Number
    },
    product: {
        type: Schema.Types.ObjectId,
        ref: "products"
    },
    employee: {
        type: Schema.Types.ObjectId,
        ref: "employees"
    }
}, {
    timestamps: true,
    strict: false
});
export default model('reviews', schema);