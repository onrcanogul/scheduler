export interface User {
  id?: number;
  name: string;
  email: string;
  password: string;
  role: "customer" | "business";
  created_at?: Date;
  updated_at?: Date;
}
