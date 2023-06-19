import mongoose, { mongo } from "mongoose";

const schema = new mongoose.Schema({
    name: String,
    surname: String,
    email: String,
    phone: String,
    message: String
    
});

const model = mongoose.model('contacts', schema);


export default model;