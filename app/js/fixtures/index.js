var models = require("mojo-models");

module.exports = function (app) {


  app.models.set("user", app.models.create("user", {
    categories: app.models.create("categories", {
      data: [
        { 
          _id: "c1",
          name: "News", 
          unreadCount: 0,
          sources: [
            "http://reddit.com/r/news"
          ]
        },
        {
          _id: "c2",
          name: "Sports", 
          unreadCount: 0,
          sources: [
            "http://reddit.com/r/sports"
          ]
        },
        {
          _id: "c3",
         name: "Weather", 
         unreadCount: 0,
         sources: [
          "http://reddit.com/r/weather"
         ]
        }
      ]
    })
  }));



  // TODO - replace me when HTTP router is in

  // app.models.set("currentCategory", app.models.user.categories.at(1));
  // app.models.set("currentArticle", app.models.currentCategory.articles.at(0));
}