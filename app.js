// Generated by CoffeeScript 1.3.1
/*global require, __dirname
*/

(function(express, dir) {
  var app;
  app = express.createServer();
  return app.configure(function() {
    app.set('view options', {
      layout: false
    });
    app.use(express["static"](dir));
    app.use(app.router);
    app.register('.html', {
      compile: function(str, options) {
        return function(locals) {
          return str;
        };
      }
    });
    app.get('/', function(req, res) {
      return res.render("" + dir + "/index.html");
    });
    return app.listen(3000, function() {
      return console.log("Express server listening on port " + (app.address().port) + " in " + app.settings.env + " mode");
    });
  });
})(require("express"), __dirname);