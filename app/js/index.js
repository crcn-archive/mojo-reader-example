var Application = require("mojo-application");

module.exports = Application.extend({
  plugins: [
    require("mojo-views"),
    require("mojo-models"),
    require("mojo-paperclip"),
    require("./views")
  ],
  didInitialize: function (options) {
    options.element.appendChild(this.views.create("main").render());
  }
});