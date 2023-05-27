import mongoose, { mongo } from "mongoose";

const schema = new mongoose.Schema({
    name: String,
    smial: String,
    location: String,
    image: {
        filename: String,
        mimetype: String,
        size: Number,
        url: String,
    }
});

const model = mongoose.model('branches', schema);


export default model;