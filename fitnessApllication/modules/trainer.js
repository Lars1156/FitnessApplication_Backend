const mongoose = require('mongoose');

const trainerSchema = new mongoose.Schema({
    name:{type:String, require:true},
    email:{type:String, require:true},
    password:{type:String,required:true},
    specialization: {type:String, require:true},
    available: {type:Boolean ,default:false},
    phoneNumber: {type:String,required:true}

})
const Trainer = mongoose.model('Trainer', trainerSchema);
module.exports = Trainer

