var moment = require("moment"),
xss        = require("xss");

module.exports = function (paperclip) {

  var modifiers = {
    fromNow: function (date) {
      return date ? moment(date).fromNow() : void 0;
    },
    xss: function (html) {
      return xss(String(html));
    },
    ellipsis: function (string, max) {
      if (String(string).length < max) return string;

      var buffer = [], parts = string.split(" ");

      // blah, just get it working for now!
      for (var i = 0, n = string.length; i < n; i++) {
        if ((buffer.join(" ") + parts[i + 1]).length >= max) return buffer.join(" ") + "...";
        buffer.push(parts[i]);
      }
    }
  };

  for (var key in modifiers) {
    paperclip.modifier(key, modifiers[key]);
  }
}