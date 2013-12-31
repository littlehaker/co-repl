# Co-repl

Write non-blocking code in a nice-ish way in a node.js repl. Based on [Co](https://github.com/visionmedia/co).

## NOTE

This is an ALPHA version. There are some problems with repl context.

## Install

```
npm install -g co-repl
```

## Usage
```
$ co-repl
> var foo = yield function(cb){return setTimeout(function(){cb(null, 'foo')}, 500)}
```
