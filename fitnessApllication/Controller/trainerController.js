const Trainer = require('../modules/trainer');
const setTrainer = require('../Services.js/trainerServices');
async function registerTrainer (req,res) {
    try{
        const{name,email, password, specialization,
            available ,phoneNumber}= req.body;
        console.log("***Trainer Details**", req.body);
        if(!name && !email && !password && !phoneNumber && !specialization  && !available){
            return res.status(400).json({msg:"Enter the all details of trainer"});
        }else if(!name){
            return res.status(400).json({msg:"Enter the Name "});
        }else if(!email){
            return res.status(400).json({msg:"Enter the email "});
        }else if(!password){
            return res.status(400).json({msg:"Enter the password "});
        }else if(!phoneNumber){
            return res.status(400).json({msg:"Enter the phoneNumber "});
        }else {
             const trainer ={
                 name:name,
                 email:email,
                 password:password,
                 phoneNumber:phoneNumber,
                 specialization:specialization,
                 available:available
             };
            const addData = new Trainer(trainer);
            await addData.save();
           return  res.status(200).json({msg:"Successfully saved trainer "});
        }
    }catch(error){
        return res.status(400).json({
            msg:"Registration Failed"
        })
    }
}

async function loginTrainer(req,res) {
    try {
          const {email ,password} = req.body;
        console.log("**** Trainer Login " , req.body);
         const checkData = await Trainer.findOne({email,password});
         if(!checkData){
             return res.status(400).json({msg:"Trainer does bot found"});
         }else {
           const token = setTrainer(checkData);
           return res.status(200).json({msg:"Successfully logged in ", data:checkData, token:token });
         }
    }catch(error){
        return res.status(400).json({msg:'Trainer not Found'})
    }
}
async function getAllTrainers(req, res) {
    try {
        const trainers = await Trainer.find();
        res.status(200).json(trainers);
    } catch (error) {
        res.status(500).json({ msg: "Server error, please try again later" });
    }
}

module.exports ={
    registerTrainer,
    loginTrainer,
    getAllTrainers
}