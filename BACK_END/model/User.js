const mongoose= require('mongoose');

const UserSchema= new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    companyName:{
        type: String,
        required: true
    },
    address:{
        type: String,
        required: true
    },
    email:{
        type:String,
        required: true,
        unique: true
    },
    password:{
        type:String,
        required: true
    },
    avatar:{
        type: String
    },
    number:{
        type: Number
    },
    date: {
        type: Date,
        default: Date.now
    },
    token: {
        type: String,
        default: ''
    }
});

module.exports= User= mongoose.model('user',UserSchema);