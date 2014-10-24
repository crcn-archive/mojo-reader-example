var models = require("mojo-models"),
async      = require("async");

module.exports = models.Collection.extend({
  createModel: function (properties) {
    properties.category = this.category;
    return this.application.models.create("article", properties);
  },
  persist: {
    load: function (onLoad) {
      this.application.sourceLoader.loadAllSources(this.category.sources, function (err, articles) {
        onLoad(null, articles);
      })
    }
  }
});