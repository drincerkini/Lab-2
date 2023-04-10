import mongoose, { mongo } from "mongoose";

const schema = new mongoose.Schema({
    name: String,
    surname: String,
    position: String,
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

const model = mongoose.model('teams', schema);


export default model;