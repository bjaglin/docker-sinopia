#!/usr/bin/env nodejs
var config = require('sinopia/lib/config_gen')()
  , yaml = require('js-yaml')
  , fs = require('fs')

console.log('Username: %s', config.user)
console.log('Password: %s', config.pass)
fs.writeFileSync('/tmp/config.yaml', config.yaml)
