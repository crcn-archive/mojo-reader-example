var Application = require("./index.js");

var app = global.app = new Application();

$(document).ready(function () {
  app.initialize({ 
    element: document.body 
  });
});