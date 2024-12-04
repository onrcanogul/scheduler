export interface Appointment {
  id?: number;
  sender_id: number;
  receiver_id: number;
  target_date: Date;
  location: string;
  created_at?: Date;
  updated_at?: Date;
  status: "pending" | "confirmed" | "cancelled";
  priority: "low" | "medium" | "high";
  deadline?: Date;
}
