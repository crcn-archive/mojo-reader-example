var models = require("mojo-models"),
superagent = require("superagent");

module.exports = models.Base.extend({
  persist: {
    load: function (onLoad) {
      var url = this.article.url;
      $.ajax({
        dataType: "jsonp",

        url: "http://api.diffbot.com/v3/article" + 
          "?callback=?" + 
          "&url="       + encodeURIComponent(url) + 
          "&token="     + this.application.config.diffbot.token,

        success: function (result) {
          onLoad(null, result.objects[0]);
        },
        error: function () {
          return onLoad(new Error("unable to load"));
        }
      });
    }
  },
  deserialize: function (data) {
    return {
      author: data.author,
      html: data.html
    }
  }
});