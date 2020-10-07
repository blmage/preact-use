"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isFunction = exports.isDeepEqual = exports.off = exports.on = exports.isClient = void 0;
exports.isClient = typeof window === 'object';
exports.on = function (obj) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    return obj.addEventListener.apply(obj, args);
};
exports.off = function (obj) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    return obj.removeEventListener.apply(obj, args);
};
var isDeepEqual = require('fast-deep-equal/react');
exports.isDeepEqual = isDeepEqual;
exports.isFunction = function (a) { return (typeof a === 'function'); };
