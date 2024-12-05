import { Schema, model } from "mongoose";
import { Analytics } from "../models/analytics-model";
const AnalysticsSchema = new Schema({
  user_id: { type: Number, required: true },
  analysis_type: { type: String, required: true },
  result: { type: Object, required: true },
  updated_at: { type: Date, default: Date.now },
});

export const AnalyticsModel = model<Analytics>("Analytics", AnalysticsSchema);
