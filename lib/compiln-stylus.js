var fs = require('fs');
var path = require('path');
var stylus = require('stylus');

module.exports.detect = function()
{
  return ["styl"];
};

module.exports.ext = function()
{
  return "css";
};

module.exports.compile = function(file, options)
{
  var css;

  stylus(fs.readFileSync(file, "utf8"))
    .set("paths", [path.normalize(path.resolve() + '/' + options.root)])
    .render(function(err, out)
      {
        css = out;
      });

  return css;
};
