const jwt = require('jsonwebtoken');
const User = require('../models/userModel'); // Adjust the path as needed

const authCheck = async (req, res, next) => {
  try {
    const { token } = req.headers;

    if (!token) {
      return res.status(401).json({ success: false, message: "Not authorized, please login again" });
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (decoded.email === process.env.ADMIN_EMAIL) {
      req.user = { role: 'Admin', email: decoded.email };
      return next();
    }
    const user = await User.findById(decoded.id); 
    if (!user) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    req.user = { role: 'User', id: decoded.id, email: decoded.email };
    next();

  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ success: false, message: "An error occurred" });
  }
};

module.exports = authCheck;
