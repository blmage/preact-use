"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable */
var hooks_1 = require("preact/hooks");
var useFirstMountState_1 = require("./useFirstMountState");
var useUpdateEffect = function (effect, deps) {
    var isFirstMount = useFirstMountState_1.useFirstMountState();
    hooks_1.useEffect(function () {
        if (!isFirstMount) {
            return effect();
        }
    }, deps);
};
exports.default = useUpdateEffect;
