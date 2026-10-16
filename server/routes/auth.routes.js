const express = require("express");

const router = express.Router();

const { signUp, login,verifyMe,logout } = require("../controllers/auth.controller");
const authMiddleware = require("../middlewares/auth.middleware");

router.post("/signup", signUp);
router.post("/login", login);
router.get("/verify-me", authMiddleware, verifyMe);
router.post("/logout", logout);

module.exports = router