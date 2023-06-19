import mongoose, { mongo } from "mongoose";

const schema = new mongoose.Schema({
    title: String,
    description: String,
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

const model = mongoose.model('news', schema);


export default model;