var views = require("mojo-views");

var CategoryView = views.Base.extend({
  paper: require("./category.pc"),
  bindings: {

    // need to bind model to category to resolve URL
    "model": "category",

    // TODO - add selected property computation here
    "currentCategory": function (currentCategory) {
      this.set("selected", currentCategory === this.model);
    }
  }
}); 

module.exports = views.Base.extend({
  paper: require("./index.pc"),
  children: {
    items: {
      type: "list",
      source: "user.categories",
      modelViewClass: CategoryView
    }
  }
});