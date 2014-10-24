var models = require("mojo-models");

module.exports = models.Collection.extend({
  createModel: function (properties) {
    properties.user = this.user;
    return this.application.models.create("category", properties);
  }
});