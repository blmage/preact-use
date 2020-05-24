"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var hooks_1 = require("preact/hooks");
var useEffectOnce = function (effect) {
    hooks_1.useEffect(effect, []);
};
exports.default = useEffectOnce;
