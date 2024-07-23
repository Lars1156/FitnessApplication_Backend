const jwt = require('jsonwebtoken');
const secret = "kishan@1156";
function  setAdmin(admin) {
   const payload ={
       _id:admin._id,
       email:admin.email

   }
    return jwt.sign(payload,secret)
}
module.exports = setAdmin;