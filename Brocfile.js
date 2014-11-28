/* global require, module */

var EmberApp = require('ember-cli/lib/broccoli/ember-app');

var app = new EmberApp({
	compassOptions: {
	outputStyle: 'expanded',
	relativeAssets: true,
    require: ['sass-css-importer'],
    sassDir: 'app/styles',
    imagesDir: 'public/assets/images',
    fontsDir: 'public/assets/fonts',
    cssDir: '/assets',
    generatedImagesPath: 'images'
    }
});

// Use `app.import` to add additional libraries to the generated
// output files.
//
// If you need to use different assets in different
// environments, specify an object as the first parameter. That
// object's keys should be the environment name and the values
// should be the asset to use in that environment.
//
// If the library that you are including contains AMD or ES6
// modules that you would like to import into your application
// please specify an object with the list of modules as keys
// along with the exports of each module as its value.

app.import('bower_components/bootstrap/dist/css/bootstrap.css');
app.import('bower_components/lodash/dist/lodash.js');
app.import('bower_components/socket.io-client/socket.io.js');
app.import('bower_components/ember-sockets/package/EmberSockets.js');

module.exports = app.toTree();
