import { Analytics } from "../models/analytics-model";
import { AnalyticsModel } from "../repository/analytics-schema";
const { CustomError } = require("../../../helpers/exceptions/CustomError");

export const getByUser = async (userId: number, type: string) => {
  const model: Analytics | null = await AnalyticsModel.findOne({
    user_id: userId,
    analysis_type: type,
  });
  if (!model) throw new CustomError("Analytics not found", 404);
  return model;
};

export const create = async (analytics: Analytics) => {
  const newAnalytics = new AnalyticsModel(analytics);
  await newAnalytics.save();
  return newAnalytics;
};

export const update = async (analytics: Analytics) => {
  const model: Analytics | null = await AnalyticsModel.findOneAndUpdate(
    { id: analytics.id },
    analytics,
    {
      new: true,
    }
  );
  if (!model) throw new CustomError("Analytics not found", 404);
  return model;
};

export const remove = async (userId: number) => {
  const existModel: Analytics | null = await AnalyticsModel.findOne({
    user_id: userId,
  });
  if (!existModel) throw new CustomError("Analytics not found", 404);
  await AnalyticsModel.findOneAndDelete({
    user_id: userId,
  });
};
