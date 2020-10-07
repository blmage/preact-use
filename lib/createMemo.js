"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var hooks_1 = require("preact/hooks");
var createMemo = function (fn) { return function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return hooks_1.useMemo(function () { return fn.apply(void 0, args); }, args);
}; };
exports.default = createMemo;
