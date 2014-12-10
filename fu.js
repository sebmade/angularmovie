#!/usr/bin/env node

'use strict';

//
// This is a Fork Utility script !
// Don't add it to you're PR or something...
//
// Required :
// - npm install nomnom shelljs snake-case chalk
//
// Info :
// ./fu.js
// ./fu.js rab --help
//

var parser = require('nomnom');
var sh = require('shelljs');
var snakeCase = require('snake-case');
var chalk = require('chalk');

function confirm(yourMsg, callback){
  var chose = ['yes', 'No'];
  var msg = [];

  process.stdin.setEncoding('utf8');
  process.stdin.resume();
  msg.push(chalk.red(yourMsg))
  msg.push(chalk.yellow('<' + chose.join('|') + '>') + ' : ');

  process.stdout.write(msg.join(' '));

  process.stdin.once('data', function(data) {
    data = data.trim();
    var ok = data === chose[0] ||
      (data.length === 1 && data[0] === chose[0][0]);

    ok && callback();
    process.stdin.pause();
  })
}

// Reset all branches on super
parser.command('rab')
   .option('remote', {
      help: 'The remote name',
      default: 'super'
   })
   .option('force', {
      flag: true,
      abbr: 'f',
      help: 'Force it !'
   })
   .callback(function(opts){
      opts.force ?
        resetAllBranches(opts) :
        confirm(
          'This script will nuke all the branches !\nStill wanna do it ?',
          resetAllBranches.bind(null, opts)
        );
    })
   .help('Reset all branches on super');

parser.parse();

////////////////////////////////////////////////////////////////////////////////
/// Common
////////////////////////////////////////////////////////////////////////////////

function e(cmd, data) {
  console.log('$ ', chalk.cyan(cmd));
  return sh.exec(cmd, {silent:true});
}

////////////////////////////////////////////////////////////////////////////////
/// Callbacks
////////////////////////////////////////////////////////////////////////////////

function resetAllBranches(opts){

  var res;

  Object.keys(['remote'])
  .reduce(function (env, key) {
    env[snakeCase(key).toUpperCase()] = opts[key];
  }, process.env);

  // Get all the branches
  e('git branch -r').output.split('\n')
  // trim the names
  .map(Function.prototype.call, String.prototype.trim)
  // extrat the 'super/step-' branches only !
  .filter(function(branch){ return branch.indexOf('super/step-') === 0; })
  // TO be continued ...
  ;

}
