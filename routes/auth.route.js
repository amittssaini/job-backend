const router =require('express').Router();
const {postLogin,postRegister,postForgetPassword} = require('../controllers/auth.controller');

router.post('/register',postRegister);
router.post('/login',postLogin);
router.post('/forgetPassword',postForgetPassword)

module.exports = router;