const jwt = require('jsonwebtoken');
const secret = "kishan@1156";

function setTrainer(trainer){
    const payload ={
        _id:trainer._id,
        email:trainer.email
    }
    return jwt.sign(payload,secret)
}

module.exports =setTrainer;