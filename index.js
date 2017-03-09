'use strict';

const pkg = require('./package.json');

// Modules
const bb = require('express-busboy');
const express = require('express')

const Backend = require('./backend');

// Server instance
/**
 * Server instance
 * @param {object} opts - Option values
 * @param {string} opts.port - Instance port
 *
 */
var Server = function(opts) {
 
  // Init. The sequences is important and should not be changed
  const app = express();
  bb.extend(app)
  this.http = require('http').Server(app);
  
  app.use(express.static('public'))  
  
  // TODO binding backend endpoint here


  this.http.listen(opts.port, (err) => {
    if (err) {
      throw err;
    }
    console.log('Server running on port : ' + opts.port);
  });
  
  return this;
}

new Server({port : 3000});
module.exports = Server;
