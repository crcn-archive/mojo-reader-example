var views = require("mojo-views");

var ArticleView = views.Base.extend({
  paper: require("./article.pc"),
  bindings: {
    // need to bind model to category to resolve URL
    "model": "article",

    "currentArticle": function (currentArticle) {
      this.set("selected", currentArticle === this.model);
    }
  }
});

module.exports = views.Base.extend({
  paper: require("./index.pc"),
  bindings: {
    "currentCategory": "category"
  },
  children: {
    items: {
      type: "list",
      source: "currentCategory.articles",
      modelViewClass: ArticleView
    }
  }
});