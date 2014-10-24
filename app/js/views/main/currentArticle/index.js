var views = require("mojo-views");

module.exports = views.Base.extend({
  paper: require("./index.pc"),
  bindings: {
    "currentArticle": "article",
    "article.scrapedStory": "story"
  }
});