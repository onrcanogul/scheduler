const jwt = require("jsonwebtoken");
const bcyrpt = require("bcrypt");
const { createUser, findUserByEmail } = require("../services/user-service");
const { asyncHandler } = require("../../../helpers/async-hander");
const { User } = require("../models/user.model");

import { Request, Response } from "express"; // Tipler için import
import { User } from "../models/user.model";

const SECRET_KEY = "secretkey1241234123413secretkey"; // it will goes to env

export const register = asyncHandler(async (req: Request, res: Response) => {
  res.status(201).json(await createUser(req.body));
});

export const login = asyncHandler(async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const user: User = await findUserByEmail(email);
  const isMatch: boolean = await bcyrpt.compare(password, user.password);
  if (!isMatch) return res.status(401).json({ error: "Invalid credentails" });
  const token = jwt.sign({ id: user.id, role: user.role }, SECRET_KEY, {
    expiresIn: "3h",
  });
  res.json({ token });
});

export const validateToken = asyncHandler(
  async (req: Request, res: Response) => {
    const { token } = req.body;
    if (!token)
      return res
        .status(400)
        .json({ isValid: false, message: "Token is required" });
    try {
      const decoded = jwt.verify(token, SECRET_KEY);
      return res.status(200).json({ isValid: true, userId: decoded.id });
    } catch (error) {
      return res
        .status(401)
        .json({ isValid: false, message: "Invalid or expired token" });
    }
  }
);
