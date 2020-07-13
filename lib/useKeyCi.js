"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var hooks_1 = require("preact/hooks");
var useEvent_1 = tslib_1.__importDefault(require("./useEvent"));
var noop = function () { };
var createKeyPredicate = function (keyFilter) {
    if (Array.isArray(keyFilter)) {
        var keys_1 = keyFilter.map(function (key) { return String(key).toLowerCase(); });
        return function (event) { return keys_1.indexOf(event.key.toLowerCase()) >= 0; };
    }
    else if (typeof keyFilter === 'string') {
        var key_1 = keyFilter.toLowerCase();
        return function (event) { return event.key.toLowerCase() === key_1; };
    }
    return keyFilter ? function () { return true; } : function () { return false; };
};
var useKeyCi = function (key, fn, opts, deps) {
    if (fn === void 0) { fn = noop; }
    if (opts === void 0) { opts = {}; }
    if (deps === void 0) { deps = [key]; }
    var _a = opts.event, event = _a === void 0 ? 'keydown' : _a, target = opts.target, options = opts.options;
    var useMemoHandler = hooks_1.useMemo(function () {
        var predicate = createKeyPredicate(key);
        var handler = function (handlerEvent) {
            if (predicate(handlerEvent)) {
                return fn(handlerEvent.key.toLowerCase());
            }
        };
        return handler;
    }, deps);
    useEvent_1.default(event, useMemoHandler, target, options);
};
exports.default = useKeyCi;
