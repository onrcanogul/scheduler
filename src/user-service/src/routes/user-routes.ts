const express = require("express");
const {
  register,
  login,
  validateToken,
} = require("../controllers/user-controller");

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.post("/validate-token", validateToken);

export default router;
