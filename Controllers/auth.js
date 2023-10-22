// controllers/authController.js
const User = require('../Models/Users');
const Buyer=require('../Models/Buyer');
const Seller=require('../Models/Seller');
const jwt = require('jsonwebtoken');
const bcrypt=require('bcrypt');
// Register a new user
const registerUser = async (req, res) => {
    
    try {
        
        const { username, password,type_of_user} = req.body;
        // console.log(req.body);

        const userExist=await User.findOne({username});
        // console.log(userExist);
        if(userExist){
            return res.status(400).json({error:`User Already Exist as ${userExist.type_of_user}` });
        }
        const hashpassword=await bcrypt.hash(password, 10);
        
        const user = new User({ username, password:hashpassword, type_of_user });
        const result=await user.save();
        if (type_of_user === 'buyer') {
            const buyer = new Buyer({ userId: user._id });
            await buyer.save();
        } else if (type_of_user === 'seller') {
            const seller = new Seller({ userId: user._id });
            await seller.save();
        }
        res.status(201).json({ message: 'User registered successfully' });
        
    } catch (error) {
        res.status(400).json({ error: 'Registration failed' });
    }
};

// Login and generate an authentication token
const loginUser = async (req, res) => {
    const { username, password } = req.body;
   
    const user = await User.findOne({ username});
    if (!user) {
        return res.status(401).json({ error: 'User Not Exist' });
    }
    const isMatch=await bcrypt.compare(password,user.password);

    if(!isMatch){
        return res.status(401).json({error:'Invalid Credentials '});
    }
   

    const token = jwt.sign({ username: user.username }, 'Satyam_Secret_Key', {
        expiresIn: '1h',
    });

    res.status(200).json({ message: 'Authentication successful', token });
};

module.exports = { registerUser, loginUser };
