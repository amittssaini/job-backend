const userModel = require('../models/user.model');
const bcrypt = require('bcrypt');
class Auth{
    async register(userData){
        try {
         const hash = await this.hashPassword(userData.password); 
         const newUserDoc =  new userModel({...userData,password:hash});  
         const resp = await newUserDoc.save();
         if(resp){
         return {
            status:201,
            message:"User Sucessfully Regiestered"
         }
        }
        } catch (error) {
            return  {
      status: 500,
      message: "User registration failed",
      error: error.message
    };
        }
    }
    async login(userData){
        try {
            const dbUser= await this.findUser(userData.email);
            if(!dbUser){
                return {
                    status:404,
                    message:"User not found"
                };
            }
            console.log("email is paased");
         const verifyPassword = await this.verifyPassword(userData.password,dbUser.password);
         console.log(verifyPassword);
         if(!verifyPassword) return {status:401,message:"Incorrect Password"}
         return {status:200,message:"User verified ",user:{id:dbUser._id,email:dbUser.email,name:dbUser.firstName}}

        } catch (error) {
           return {
            status: 500,
            message: "Server error",
            error: error.message
        }; 
        }

    }
   async findUser(email){
        try {
           const resp = await  userModel.findOne({email})
           if(resp) return resp;
           else return false;
           
        } catch (error) {
            return error.message;
        }
    }
     async verifyPassword(loginPassword,userPassword){
        try {
         const resp = await bcrypt.compare(loginPassword,userPassword);
         return resp;
        } catch (error) {
            return error.message;
        }
    }
    async hashPassword(password){
        try {
            const salt = await bcrypt.genSalt();
            console.log(salt);
            const hash = await bcrypt.hash(password,salt);
            return hash;

        } catch (error) {
            return error;
        } 
    }

}
module.exports= Auth;