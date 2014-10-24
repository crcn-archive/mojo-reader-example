var Application = require("mojo-application");

module.exports = Application.extend({
  plugins: [
    require("mojo-bootstrap"),
    require("mojo-views"),
    require("mojo-models"),
    require("mojo-paperclip"),
    require("mojo-router"),

    require("./views"),
    require("./service"),
    require("./routes"),
    require("./fixtures"),
    require("./template")
  ],

  // api config stuff should go here
  config: {
    diffbot: {
      token: "27439c444542658f5f46b17fe9130d58"
    }
  },
  didInitialize: function (options) {
    options.element.appendChild(this.views.create("main").render());
  }
});