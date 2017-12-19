/**
 * moreMoudles
 */

/**
 * chunkId
 * moreModules
 * executeModules
 */
webpackJsonp([0], {
    'a': (function (module, exports, __webpack__require__) {
        var test = __webpack__require__('b')
        test.sayHello();
    }),
    'b': (function (module, exports) {
        exports.sayHello = function () {
            console.log('hello world')
        }
    })
}, ['a'])