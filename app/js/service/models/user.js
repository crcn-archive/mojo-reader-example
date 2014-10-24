var models = require("mojo-models");

module.exports = models.Base.extend({
  virtuals: {
    categories: function (onLoad) {
      return this.application.models.create("categories", {
        user: this
      }).load(onLoad);
    }
  }
});