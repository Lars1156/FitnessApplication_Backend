const Workout = require('../modules/workout');
const jwt = require('jsonwebtoken');
const secret = "kishan@1156";

async function addWorkout(req,res){
    try {
        jwt.verify(req.token,secret, (err,result)=>{
            if(err) throw err;
            const{type,duration,caloriesBurned,date , userId} = req.body;
            console.log("** adding workOut Details ***"  ,req.body);
            if(err) throw err;
            if(!type && !duration && !caloriesBurned && !date && !userId){
                return res.status(400).json({ msg:"Enter the all Workout details"});
            }else if(!type){
                return  res.status(400).json({msg:"Enter the type workout"});
            }else if(!duration){
                return res.status(400).json({msg:"Enter the duration in workout"});
            }else if(!caloriesBurned){
                return  res.status(400).json({msg:"Enter the caloriesBurned Users"});

            }else if(!date){
                return res.status(400).json({msg:"Enter the dates of workOuts"});
            }else if(!userId){
                return res.status(400).json({msg:"Enter the userId for user Workout"});
            }
        })
    }catch(error){
        return res.status(400).json({msg:"Error to adding Workouts"});
    }
}

module.exports = {addWorkout}