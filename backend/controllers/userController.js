const bcrypt = require('bcrypt');
const User = require('../models/userModel');
const jwt = require('jsonwebtoken');

const registerUser = async (req, res) => {
    const { first_name, last_name, contact_no, email, state, referral_code, password, confirm_password } = req.body;
    if (password !== confirm_password) {
        return res.status(400).json({ success:false, message: 'Password and Confirm Password do not match.' });
    }
    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({success:false, message: 'Email already in use.' });
        }
        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new User({
            first_name,
            last_name,
            contact_no,
            email,
            state,
            referral_code,
            password: hashedPassword
        });
        await newUser.save();
        return res.status(201).json({ success:true,message: 'User registered successfully.' });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ success:false, message: 'An error occurred while registering the user.' });
    }
};

const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        console.log(process.env.ADMIN_EMAIL);
        // Check for admin login
        if (email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD) {
            const token = jwt.sign({ email }, process.env.JWT_SECRET, { expiresIn: '1h' });
            return res.status(200).json(
                {
                success: true,
                role: 'Admin',
                token: token,
                message: 'Logged in successfully',
            });
        }

        // Check for user login
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ success: false, message: 'User not found.' });
        }

        const isPasswordMatch = await bcrypt.compare(password, user.password);
        if (!isPasswordMatch) {
            return res.status(400).json({ success: false, message: 'Invalid email or password.' });
        }

        const token = jwt.sign({ id: user._id, email: user.email }, process.env.JWT_SECRET, { expiresIn: '1h' });
        return res.status(200).json({
            success: true,
            role: 'User',
            token: token,
            message: 'Logged in successfully as user',
            user: {
                id: user._id,
                first_name: user.first_name,
                last_name: user.last_name,
                email: user.email,
            },
        });
    } catch (error) {
        console.error('Error:', error);
        return res.status(500).json({ success: false, message: 'An error occurred.' });
    }
};

//get user list
const getAllUsers = async (req, res) => {
    try {
      const users = await User.find(); // Fetch all users
      res.status(200).json({
        success: true,
        data: users,
      });
    } catch (error) {
      console.error("Error fetching users:", error);
      res.status(500).json({
        success: false,
        message: "Failed to fetch users",
      });
    }
  };
  
  const getUser = async (req, res) => {
    try {
      // Check if the user is authenticated
      if (!req.user) {
        return res.status(401).json({ success: false, message: 'Not authenticated' });
      }
  
      // Fetch user data from the database using the user ID
      const user = await User.findById(req.user.id); 
  
      if (!user) {
        return res.status(404).json({ success: false, message: 'User not found' });
      }
  
      // Send the full user data
      res.status(200).json({
        success: true,
        user,
      });
    } catch (error) {
      console.error('Error fetching logged-in user data:', error);
      res.status(500).json({ success: false, message: 'An error occurred while fetching user data' });
    }
  };
  
module.exports = { registerUser,loginUser,getAllUsers,getUser};