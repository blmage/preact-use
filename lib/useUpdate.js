"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var hooks_1 = require("preact/hooks");
var updateReducer = function (num) { return (num + 1) % 1000000; };
var useUpdate = function () {
    var _a = hooks_1.useReducer(updateReducer, 0), update = _a[1];
    return update;
};
exports.default = useUpdate;
