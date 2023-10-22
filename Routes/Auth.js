const router=require('express').Router();


const { registerUser, loginUser } = require('../Controllers/auth');

// Register a user
router.post('/register', registerUser);
// router.get('/register',(req,res)=>{
//     res.send("hello");
// });

// // Login
router.post('/login', loginUser);

module.exports = router;
