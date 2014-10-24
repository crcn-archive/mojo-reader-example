module.exports = function (app) {
  app.models.register({
    user: require("./user"),
    categories: require("./categories"),
    category: require("./category"),
    articles: require("./articles"),
    article: require("./article"),
    scrapedStory: require("./scrapedStory")
  });
}