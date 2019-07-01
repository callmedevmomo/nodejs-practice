export const localMiddlewares = (req, res, next) => {
  res.locals.siteName = "momoworld!";
  next();
};
