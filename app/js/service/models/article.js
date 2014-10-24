var models = require("mojo-models"),
superagent = require("superagent");

module.exports = models.Base.extend({
  virtuals: {
    scrapedStory: function (onLoad) {
      return this.application.models.create("scrapedStory", {
        article: this
      }).load(onLoad);
    }
  }
});