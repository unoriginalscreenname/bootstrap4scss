Package.describe({
  name: 'ericmcgregor:bootstrap4scss',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: '',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

var path = Npm.require("path");
var fs = Npm.require("fs");

var packageRoot = path.join(path.resolve("."), "packages");
var packagePath = path.join(packageRoot, "bootstrap4scss");
var bootstrapPath = path.join(packagePath, "bootstrap");


Package.onUse(function(api) {
  api.versionsFrom('1.2.1');

  api.use([
    'ecmascript',
  	'fourseven:scss'
  ]);
  var bootstrapPath = path.join(path.resolve("."), "packages", "bootstrap4scss", "bootstrap");

  var mixinSrc = path.join(bootstrapPath, "scss/mixins")
  var mixinSrcFiles = fs.readdirSync(mixinSrc);

  mixinSrcFiles.forEach(function(file){
    if(file.slice(-4) !== 'scss') {return;}
    addPath = path.join('bootstrap/scss/mixins', file);
    api.add_files(addPath, "client", {isImport:true});
  });


  var scssSrc = path.join(bootstrapPath, "scss")
  var scssSrcFiles = fs.readdirSync(scssSrc);

  scssSrcFiles.forEach(function(file){
    if(file.slice(-4) !== 'scss') {return;}
    if(file=='bootstrap-flex.scss' || file=='bootstrap.scss'){return;}
    addPath = path.join('bootstrap/scss/', file);
    api.add_files(addPath, "client", {isImport:true});
  });

  api.add_files('bootstrap.scss', "client", {isImport:true});

});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('ericmcgregor:bootstrap4scss');
  api.addFiles('bootstrap4scss-tests.js');
});
