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

export const getById = asyncHandler(async (req: Request, res: Response) => {
  const appointments = await get(req.params.id);
  if (!appointments)
    return res.status(404).json({ error: "Appointments not found" });
  return res.status(200).json(appointments);
});

export const getBySender = asyncHandler(async (req: Request, res: Response) => {
  const appointments = await getBySenderId(req.params.senderId);
  if (!appointments)
    return res.status(404).json({ error: "Appointments not found" });
  return res.status(200).json(appointments);
});

export const getByReceiver = asyncHandler(
  async (req: Request, res: Response) => {
    const appointments = await getByReceiverId(req.params.receiverId);
    if (!appointments)
      return res.status(404).json({ error: "Appointments not found" });
    return res.status(200).json(appointments);
  }
);

export const createAppointment = asyncHandler(
  async (req: Request, res: Response) =>
    await res.status(201).json(create(req.body))
);

export const updateAppointment = asyncHandler(
  async (req: Request, res: Response) =>
    await res.status(200).json(update(req.body))
);

export const deleteAppointment = asyncHandler(
  async (req: Request, res: Response) => {
    await remove(req.params.id);
    return res.status(204).json({ message: "deleted" });
  }
);
