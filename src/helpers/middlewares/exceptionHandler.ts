import { CustomError } from "../exceptions/CustomError";

export const handleError = (error: Error, res: any) => {
  console.log(error);
  if (error instanceof CustomError) {
    return res.json(error.statusCode).json({ message: error.message });
  }
};
