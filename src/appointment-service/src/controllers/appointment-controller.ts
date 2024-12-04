import { asyncHandler } from "../../../helpers/async-hander";
const {
  get,
  getByReceiverId,
  getBySenderId,
  create,
  update,
  remove,
} = require("../services/appointment-service");
import { Request, Response } from "express";

export const getById = asyncHandler((req: Request, res: Response) => {
  const appointments = get(req.params.id);
  if (!appointments)
    return res.status(404).json({ error: "Appointments not found" });
  return res.status(200).json(appointments);
});

export const getBySender = asyncHandler((req: Request, res: Response) => {
  const appointments = getBySenderId(req.params.senderId);
  if (!appointments)
    return res.status(404).json({ error: "Appointments not found" });
  return res.status(200).json(appointments);
});

export const getByReceiver = asyncHandler((req: Request, res: Response) => {
  const appointments = getByReceiverId(req.params.receiverId);
  if (!appointments)
    return res.status(404).json({ error: "Appointments not found" });
  return res.status(200).json(appointments);
});

export const createAppointment = asyncHandler((req: Request, res: Response) =>
  res.status(201).json(create(req.body.appointment))
);

export const updateAppointment = asyncHandler((req: Request, res: Response) =>
  res.status(200).json(update(req.body.appointment))
);

export const deleteAppointment = asyncHandler((req: Request, res: Response) => {
  remove(req.params.id);
  return res.status(204);
});
