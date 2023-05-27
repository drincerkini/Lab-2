import mongoose, { mongo } from "mongoose";

const schema = new mongoose.Schema({
    name: String,
    surname: String,
    department: String,
    degree: String,
    image: {
        filename: String,
        mimetype: String,
        size: Number,
        url: String,
    }
});

const model = mongoose.model('assistants', schema);


export default model;