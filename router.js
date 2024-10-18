const authRouter = require("./src/controllers/auth/authController");
const apiPrefix = "/api/v1";

const routes = [{ route: authRouter, prefix: "/auth" }];

module.exports = (app) => {
  routes.forEach((element) => {
    app.use(`${apiPrefix}${element.prefix}`, element.route);
  });

  return app;
};
