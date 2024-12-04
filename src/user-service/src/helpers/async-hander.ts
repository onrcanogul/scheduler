export const asyncHandler = (fn: Function) => {
  return function (req: Request, res: Response, next) {
    Promise.resolve(fn(req, res, next)).catch(next);
  };
};
