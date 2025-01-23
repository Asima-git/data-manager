const express = require('express');
const { registerUser, loginUser,getAllUsers,getUser } = require('../controllers/userController');
const authCheck = require('../middlewares/authMiddleware')
const router = express.Router();

router.post('/register',registerUser)
router.post('/login',loginUser)
router.get('/list',authCheck,getAllUsers)
router.get('/get-user',authCheck,getUser);

module.exports = router;