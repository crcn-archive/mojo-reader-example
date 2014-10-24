var views = require("mojo-views");

module.exports = views.Base.extend({

  paper: require("./index.pc"),

  // only place where singletons should be defined - user
  // will get inherited by other child properties. 
  bindings: {
    "application.models.user"            : "user",
    "application.models.currentCategory" : "currentCategory",
    "application.models.currentArticle"  : "currentArticle"
  },

  children: {
    sidebar         : require("./sidebar"),
    currentCategory : require("./currentCategory"),
    currentArticle  : require("./currentArticle")
  }
});