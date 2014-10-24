var Application = require("./index.js");

var app = global.app = new Application();

$(document).ready(function () {
  app.bootstrap({ 
    element: document.body 
  });
});