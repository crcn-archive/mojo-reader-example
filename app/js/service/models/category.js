var models = require("mojo-models");

module.exports = models.Base.extend({
  virtuals: {
    articles: function (onLoad) {
      return this.application.models.create("articles", {
        category: this
      }).load(onLoad);
    }
  }
});