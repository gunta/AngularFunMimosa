// Generated by CoffeeScript 1.3.3

/*global module, require
*/


(function() {

  module.exports = function(grunt) {
    var coffeeScript, growl, handleResult, path;
    coffeeScript = require('coffee-script');
    growl = require('growl');
    path = require('path');
    handleResult = function(src, dest, err, stdout, code, done) {
      var destFullPath, message, srcFullPath;
      srcFullPath = path.resolve(src);
      destFullPath = path.resolve(dest);
      if (err) {
        message = "Failed to compile " + srcFullPath + " to " + destFullPath + ".\n\n" + stdout;
        grunt.log.writeln(message);
        growl(message, {
          title: 'CoffeeScript Compile Error',
          sticky: true
        });
        done(false);
        return;
      }
      message = "Compiled " + srcFullPath + " to " + destFullPath + ".";
      grunt.log.writeln(message);
      growl(message, {
        title: 'CoffeeScript Compiled'
      });
      return done(true);
    };
    return grunt.registerMultiTask('coffee', 'Compile CoffeeScript to JavaScript', function() {
      var bare, dest, done, options, src;
      done = this.async();
      src = this.file.src;
      dest = this.file.dest;
      bare = !!this.data.bare;
      options = {
        cmd: 'coffee',
        args: ['--compile', bare ? '--bare' : void 0, '--output', dest, src]
      };
      return grunt.helper('exec', options, function(err, stdout, code) {
        return handleResult(src, dest, err, stdout, code, done);
      });
    });
  };

}).call(this);