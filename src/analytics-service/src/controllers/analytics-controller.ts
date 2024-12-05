import { asyncHandler } from "../../../helpers/async-hander";
import {
  getByUser,
  create,
  update,
  remove,
} from "../services/analytics-services";

import { Request, Response } from "express";

export const getByUserId = asyncHandler(async (req: Request, res: Response) =>
  res
    .status(200)
    .json(await getByUser(parseInt(req.params.userId), req.params.type))
);

export const createAnalytics = asyncHandler(
  async (req: Request, res: Response) =>
    res.status(201).json(await create(req.body))
);

export const updateAnalytics = asyncHandler(
  async (req: Request, res: Response) =>
    res.status(200).json(await update(req.body))
);

export const deleteAnalytics = asyncHandler(
  async (req: Request, res: Response) => {
    remove(parseInt(req.params.userId));
    return res.status(200).json({ message: "deleted" });
  }
);
