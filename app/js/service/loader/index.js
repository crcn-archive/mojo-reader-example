var bindable = require("bindable"),
RedditLoader = require("./adapters/reddit"),
async = require("async");

function Loader () {
  this._loaders = [
    new RedditLoader()
  ];
}

module.exports = bindable.Object.extend(Loader, {
  load: function (source, onLoad) {
    var apiUrl;

    for (var i = this._loaders.length; i--;) {
      var loader = this._loaders[i];
      if (apiUrl = loader.getApiUrl(source)) break;
    }

    return loader.load(apiUrl, onLoad);
  },
  loadAllSources: function (sources, onLoad) {
    var allArticles = [],
    self = this;

    async.each(sources, function (source, next) {
      self.load(source, function (err, articles) {
        // TODO - handle error
        if (err) return next();
        allArticles.push.apply(allArticles, articles);
        next();
      });
    }, function (err) {
      if (err) return onLoad(err);
      onLoad(null, allArticles);
    });
  }
});