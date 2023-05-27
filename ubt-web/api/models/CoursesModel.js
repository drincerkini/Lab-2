import mongoose, { mongo } from "mongoose";

const schema = new mongoose.Schema({
    name: String,
    credits: Number,
    department: String,
    image: {
        filename: String,
        mimetype: String,
        size: Number,
        url: String,
    }
});

const model = mongoose.model('courses', schema);


export default model;