'use strict';

var spawn = require('child_process').spawn;
var fs = require('fs');

require('should');
var wrench = require('wrench');

describe('Canvas theme', function () {

  var EJSSiteName  = 'testEJSSite';
  var JadeSiteName = 'testJadeSite';

  before(function () {
    if (fs.existsSync(EJSSiteName)) {
      wrench.rmdirSyncRecursive(EJSSiteName);
    }
    if (fs.existsSync(JadeSiteName)) {
      wrench.rmdirSyncRecursive(JadeSiteName);
    }
  });

  after(function () {
    wrench.rmdirSyncRecursive(EJSSiteName);
    wrench.rmdirSyncRecursive(JadeSiteName);
  });

  // To speed up testing in development, copy the node_modules from the theme
  // rather than installing each time from npm
  var noInstall = process.env.NODE_ENV === 'dev' ? '--noInstall' : '';

  it('should generate a site when installed with Cabin selecting the EJS template engine', function (done) {
    var cabinProcess = spawn('node', ['node_modules/cabin/bin/cabin', 'new', EJSSiteName, '.', '--local', '--templateEngine', 'EJS', '--deployTask', 'None', noInstall]);
    cabinProcess.on('close', function () {


      if (noInstall) {
        wrench.copyDirSyncRecursive('node_modules', EJSSiteName + '/node_modules');
      }

      var gruntBuildProcess = spawn('grunt', ['build'], {
        cwd: EJSSiteName
      });

      gruntBuildProcess.on('close', function () {
        fs.existsSync(EJSSiteName + '/dist/index.html').should.eql(true, 'index.html created');
        fs.existsSync(EJSSiteName + '/dist/posts/my-cool-blog-post/index.html').should.eql(true, 'my-cool-blog-post created');
        fs.existsSync(EJSSiteName + '/dist/styles/main.css').should.eql(true, 'main.css created');
        done();
      });
    });
  });

  it('should generate a site when installed with Cabin selecting the Jade template engine', function (done) {
    var cabinProcess = spawn('node', ['node_modules/cabin/bin/cabin', 'new', JadeSiteName, '.', '--local', '--templateEngine', 'Jade', '--deployTask', 'None', noInstall]);
    cabinProcess.on('close', function () {
      if (noInstall) {
        wrench.copyDirSyncRecursive('node_modules', JadeSiteName + '/node_modules');
      }
      var gruntBuildProcess = spawn('grunt', ['build'], {
        cwd: JadeSiteName
      });

      gruntBuildProcess.on('close', function () {
        fs.existsSync(JadeSiteName + '/dist/index.html').should.be.ok;
        fs.existsSync(JadeSiteName + '/dist/posts/my-cool-blog-post/index.html').should.be.ok;
        fs.existsSync(JadeSiteName + '/dist/styles/main.css').should.be.ok;
        done();
      });
    });
  });
});