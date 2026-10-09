const jwt = require("jsonwebtoken")

const authMiddleware =  async (req, res, next) => {
    try {
        const token = req.cookies?.token;

        if (!token) {
            return res.status(401).json({
                message: "Authentication required"
            });
        }

        const decoded = jwt.verify(
            token,
            process.env.JWT_SECRET
        );

        req.userId = decoded.userId;

        const User = require("../models/user.model");

const user = await User.findById(decoded.userId).select("_id role");

if (!user) {
    return res.status(401).json({
        message: "User not found"
    });
}

req.userId = user._id;
req.userRole = user.role;
        next()

    } catch (error) {
        return res.status(401).json({
            message : "Invalid or expired token"
        })
    }
}



module.exports = authMiddleware