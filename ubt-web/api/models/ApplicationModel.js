import mongoose, { mongo } from "mongoose";

const schema = new mongoose.Schema({
    name: String,
    surname: String,
    email: String,
    birthdate: Date,
    address: String,
    phone: String,
    department: String
    
});

const model = mongoose.model('applications', schema);


export default model;