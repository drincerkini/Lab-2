import mongoose, { mongo } from "mongoose";

const schema = new mongoose.Schema({
    name: String,
    image: {
        filename: String,
        mimetype: String,
        size: Number,
        url: String,
    }
});

const model = mongoose.model('departments', schema);


export default model;