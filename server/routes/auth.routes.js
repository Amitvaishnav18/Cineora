const express = require("express");

const router = express.Router();

const { signUp, login,getMe,logout } = require("../controllers/auth.controller");
const authMiddleware = require("../middlewares/auth.middleware");

router.post("/signup", signUp);
router.post("/login", login);
router.get("/me",authMiddleware,getMe )
router.post("/logout", logout);

module.exports = router