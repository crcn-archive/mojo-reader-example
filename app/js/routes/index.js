// TODO - route syntax is still kinda alpha.
var sift = require("sift");

module.exports = function (app) {


  function getCategory (search, next) {

    if (typeof search === "function" && arguments.length === 1) {
      next = search;
      search = function () {
        return true;
      };
    }

    app.models.bind("user.categories", { max: 1, to: function (categories) {
      next(null, sift(search, categories.source).pop())
    }}).now();
  }

  app.router.param("category._id", function (location, next) {
    getCategory({ _id: location.params.category._id }, function (err, category) {
      app.models.set("currentCategory", category);
      app.models.set("currentArticle", void 0);
      next();
    });
  });

  app.router.param("article._id", function (location, next) {
    app.models.currentCategory.bind("articles", { max: 1, to: function (articles) {
      app.models.set("currentArticle", sift({ _id: location.params.article._id}, articles.source).pop());
      next();
    }}).now();
  });

  app.router.add({
    "/": {
      enter: function (location, next) {
        getCategory(function (err, category) {
          app.models.set("currentCategory", category);
          app.models.set("currentArticle", void 0);
          next();
        })
      },
      name: "home"
    },
    "/categories/:category._id": {
      name: "category",
      "/article/:article._id": {
        name: "article"
      }
    }
  });

}