const authService = require('../services/auth.service');
const authInstance = new authService();


const postRegister=async (req,res)=>{
try {
    const registerData = req.body;
    const resp = await authInstance.register(registerData);
    res.status(resp.status).json({message:resp.message,...(resp.error&&{error:resp.error})});
} catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
}
}
const postLogin=async(req,res)=>{
try {
    const data = req.body;
    const resp = await authInstance.login(data);
    console.log(resp);
    res.status(resp.status).json({message:resp.message,...(resp.user&&{user:resp.user})});
} catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
}
}

const postForgetPassword=async(req,res)=>{
    try {
        const {email,password} = req.body;
        console.log(email,password);
        const resp = await authInstance.forgetPassword(email,password);
        console.log("response in the controller ",resp);
        if(resp.sucess===false)
            res.status(resp.status).json({sucess:false,message:resp.message});
        res.status(200).json({sucess:true,message:"password Sucessfully Updated"})
        
    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
}
module.exports = {postLogin,postRegister,postForgetPassword}