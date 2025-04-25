







const jwt = require('jsonwebtoken');
require('dotenv').config();

////main worked code

const authUser = async (req, res, next) => {








  try {
    // Expecting Authorization: Bearer <token>
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.json({ success: false, message: "Unauthorized - No token provided" });
    }

    const token = authHeader.split(" ")[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = decoded.id;
    next();
  } catch (error) {
    return res.json({ success: false, message: "Unauthorized - Invalid token" });
  }
};



module.exports = authUser;


































