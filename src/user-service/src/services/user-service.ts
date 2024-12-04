import { User } from "../models/user.model";

const pool = require("../repository/index");
const bcyrpt = require("bcrypt");

export const createUser = async (user: any): Promise<User> => {
  const hashedPassword = await bcyrpt.hash(user.password, 10);
  const query =
    "INSERT INTO users (name, email, password, role) VALUES ($1, $2, $3, $4) RETURNING name, email, role";
  const values = [
    user.name,
    user.email,
    hashedPassword,
    user.role || "customer",
  ];
  const result = await pool.query(query, values);
  return result.rows[0];
};

export const findUserByEmail = async (email: string): Promise<User> => {
  const query = "SELECT * FROM USERS WHERE email = $1";
  const result = await pool.query(query, [email]);
  return result.rows[0];
};
