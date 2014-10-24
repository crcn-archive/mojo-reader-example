var SourceLoader = require("./loader");

module.exports = function (app) {
  app.use(require("./models"));

  // TODO - this should be named a bit differently
  app.sourceLoader = new SourceLoader();
}