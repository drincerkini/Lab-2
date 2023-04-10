import mongoose, { mongo } from "mongoose";

const schema = new mongoose.Schema({
    name: String,
    surname: String,
    email: String,
    phone: String,
    description: String,
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const model = mongoose.model('contact', schema);


export default model;