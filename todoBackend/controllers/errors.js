export const pageNotFound = (request, response, next) => {
  response.status(404).json({
    message: "Page Not Found",
  });
};
