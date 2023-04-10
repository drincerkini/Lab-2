import mongoose, { mongo } from "mongoose";

const schema = new mongoose.Schema({
    title: String,
    description: String,
    price: Number,
    category: String,
    image: {
        filename: String,
        mimetype: String,
        size: Number,
        url: String,
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const model = mongoose.model('services', schema);




export default model;