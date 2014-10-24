module.exports = function (app) {
  app.paperclip.use(require("./modifiers"));
}