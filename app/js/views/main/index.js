var views = require("mojo-views");

module.exports = views.Base.extend({
  paper: "hello {{name}}!",
  name: "reader app"
});