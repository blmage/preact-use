"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var hooks_1 = require("preact/hooks");
var toggleReducer = function (state, nextValue) { return (typeof nextValue === 'boolean' ? nextValue : !state); };
var useToggle = function (initialValue) {
    return hooks_1.useReducer(toggleReducer, initialValue);
};
exports.default = useToggle;
