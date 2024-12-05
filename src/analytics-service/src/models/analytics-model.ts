import { Document } from "mongoose";

export interface Analytics extends Document {
  user_id: number;
  analysis_type: string;
  result: Record<string, any>;
  updated_at: Date;
}
