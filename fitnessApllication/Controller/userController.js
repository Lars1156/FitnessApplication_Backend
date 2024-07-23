const User = require('../modules/user');
const setUser = require('../Services.js/userServices');

async function registerUser(req,res){
     try {
         const{name , email , password} = req.body;
         console.log("***User Details***", req.body);
         if(!name && !email && !password){
             return res.status(400).json({msg:"Enter the all User details"});
         }else if(!name){
             return  res.status(400).json({msg:"Enter the name field"});
         }else if(!email){
             return res.status(400).json({msg:"Enter the email field"});
         }else if(!password){
             return res.status(400).json({msg:"Enter the password field"});
         }else{
             const existingUser = await User.findOne({ email: email });
             if (existingUser) {
                 return res.status(400).json({ msg: "User with this email already exists" });
             }
             const user = {
                 name:name,
                 email:email,
                 password:password
             };
             console.log("**** Added User go through the Database " , user);
             const addData = new User(user);
             await addData.save()
             res.status(200).json({msg:"User Added successfully"});
         }

     }catch(error){
        return  res.status(400).json({msg:"User is Not added server"});
     }
}
async function getAllUsers(req, res) {
    console.log("**ALL Users", req.body);
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ msg: "Server error, please try again later" });
    }
}


async function loginUser(req,res){
    try {
        const {email , password} = req.body;
        console.log("***User Login Details", req.body);
        const checkData =  await User.findOne({email,password});
        if(!checkData){
            return res.status(401).json({msg:"User does not exist"});
        }else {
            const token = setUser(checkData);
            return res.status(200).json({msg: "Successfully Logged In", data: checkData, token: token});
        }

    }catch (error){
        return res.status(400).json({msg:"User Dose not exist"});
    }
}
async function deleteUser(req, res) {
    try {
        const { id } = req.params;
        console.log("**Delete User with ID:", id);

        // Find the user by ID and delete
        const deletedUser = await User.findByIdAndDelete(id);

        if (!deletedUser) {
            return res.status(404).json({ msg: "User not found" });
        }

        res.status(200).json({ msg: "User deleted successfully" });
    } catch (error) {
        res.status(500).json({ msg: "Server error, please try again later" });
    }
}


module.exports = {
    registerUser,
    loginUser,
    getAllUsers,
    deleteUser
}