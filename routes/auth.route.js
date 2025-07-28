const router =require('express').Router();
const {postLogin,postRegister} = require('../controllers/auth.controller');

router.post('/register',postRegister);
router.post('/login',postLogin);

module.exports = router;