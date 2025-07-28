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

module.exports = {postLogin,postRegister}