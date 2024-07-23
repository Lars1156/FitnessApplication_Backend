const Admin = require('../modules/admin');
const setAdmin = require('../Services.js/adminServices');

async function registerAdmin(req, res){
    try{
        const{name , email , password} = req.body;
        if(!name && email && password){
            return  res.status(400).json({msg:"Enter the All details"});
        }else if(!name){
            return res.status(400).json({msg:"Enter the name field"});
        }else if(!email){
            return res.status(400).json({msg:"Enter the email fields"})
        } else if(!password){
            return res.status(400).json({msg:"Enter the password field"});
        }else {
            const admin= {
                name : name ,
                email:email,
                password:password
            };
            const addData = new Admin(admin);
            await addData.save();
            return res.status(200).json({msg:'successfully added admin'});
        }

    }catch (error){
        return res.status(400).json({ msg:"Admin not registered"});
    }
}

async  function loginAdmin (req, res){
    try{
        const {email , password} = req.body;
        const checkData = await  Admin.findOne({email,password});
        if(!checkData){
            return res.status(400).json({msg:"User does not exist"});
        }else {
            const token = setAdmin(checkData);
            return res.status(200).json({msg:"Successfully logged in" ,data:checkData , token:token})
        }
    }catch(error){
        return res.status(400).json({msg:"Admin does not exist"})
    }
}
module.exports = {
    registerAdmin, loginAdmin
}