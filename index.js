#!/usr/bin/env node --harmony

var REPL = require('repl')
var co = require('co')
var vm = require('vm')

function coEval(cmd, context, filename, callback) {
   try {
		 var result = eval(cmd);
     callback(null, result);
   } catch(e) {
     context.___CALLBACK___ = callback;
		 if (!context.___CO___) {
			 context.___CO___ = require('co');
		 }
		 // Wrap with co
     var cmd = '___CO___(function*(){___CALLBACK___(null, ' + cmd + ')})()';
		 var script = vm.createScript(cmd);
		 script.runInNewContext(context);
   }
};

function start() {
	var repl = REPL.start({
		eval: coEval
	});
	require('repl.history')(repl, process.env.HOME + '/.node_history');
}

if (!module.parent) {
	start();
} else {
	module.exports.start = start
}
