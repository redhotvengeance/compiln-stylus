var fs = require('fs');
var path = require('path');
var stylus = require('stylus');

module.exports.detect = function() {
  return ["styl"];
};

module.exports.ext = function() {
  return "css";
};

module.exports.compile = function(file, options, callback) {
  fs.readFile(file, "utf8", function(error, data) {
    if (error) throw error;

    stylus(data)
      .set("paths", [path.normalize(path.resolve() + '/' + options.root)])
      .define("versionedFile", options.versionedFile)
      .render(function(error, out) {
        if (error) throw error;

        callback(null, out);
      });
  });
};
