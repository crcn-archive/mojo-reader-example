var bindable = require("bindable"),
Url = require("url");

module.exports = bindable.Object.extend({

  load: function (source, onLoad) {

    $.ajax({
      dataType: "jsonp",
      url: source,
      success: function (result) {
        onLoad(null, 
          result.data.children.map(function (data) {
            var item = data.data;
            return {
              _id: item.id,
              via: "reddit",
              title: item.title,
              url: item.url,
              author: item.author,
              summary: void 0
            };
          })
        )
      },
      error: function () {
        // TODO
      }
    });
  },

  getApiUrl: function (url) {

    var urlParts = Url.parse(url);

    if (!/reddit/.test(urlParts.hostname)) return void 0;


    return url + ".json?limit=20&jsonp=?";
    // return "http://www.reddit.com/"++".json?limit=10&jsonp=alert"
  }
});