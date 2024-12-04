import { Appointment } from "../models/appointment-model";

const pool = require("../repository/index");

export const get = async (id: number): Promise<Appointment> => {
  const query = "SELECT * FROM Appointments WHERE id = $1";
  const result = await pool.query(query, [id]);
  return result.rows[0];
};

export const getBySenderId = async (
  senderId: number
): Promise<Appointment[]> => {
  const query = "SELECT * FROM Appointments WHERE sender_id = $1";
  const result = await pool.query(query, [senderId]);
  return result.rows[0];
};

export const getByReceiverId = async (
  receiverId: number
): Promise<Appointment[]> => {
  const query = "SELECT * FROM Appointments WHERE receiver_id = $1";
  const result = await pool.query(query, [receiverId]);
  return result.rows[0];
};

export const getByUser = async (userId: number): Promise<Appointment[]> => {
  const query =
    "SELECT * FROM Appointments WHERE receiver_id = $1 OR senderId = $1";
  const result = await pool.query(query, [userId]);
  return result.rows[0];
};

export const create = async (
  appointment: Appointment
): Promise<Appointment> => {
  const query =
    "INSERT INTO Appointments (sender_id, receiver_id, target_date, location, status, priority, deadline) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *";
  const values = [
    appointment.sender_id,
    appointment.receiver_id,
    appointment.target_date,
    appointment.location,
    appointment.status,
    appointment.priority,
    appointment.deadline,
  ];
  const result = await pool.query(query, values);
  return result.rows[0];
};

export const update = async (
  appointment: Appointment
): Promise<Appointment> => {
  const entity = get(appointment.id);
  if (!entity) return null;
  const query =
    "UPDATE Appointments SET sender_id = $1, receiver_id = $2, target_date = $3, location = $4, status = $5, priority = $6, deadline = $7 RETURNING *";
  const values = [
    appointment.sender_id,
    appointment.receiver_id,
    appointment.target_date,
    appointment.location,
    appointment.status,
    appointment.priority,
    appointment.deadline,
  ];
  const result = await pool.query(query, values);
  return result.rows[0];
};

export const remove = async (id: number): Promise<void> => {
  const entity = get(id);
  if (!entity) return null;
  const query = "DELETE FROM Appointments WHERE id = $1";
  await pool.query(query, [id]);
};
