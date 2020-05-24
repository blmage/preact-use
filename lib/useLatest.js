"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var hooks_1 = require("preact/hooks");
var useLatest = function (value) {
    var ref = hooks_1.useRef(value);
    ref.current = value;
    return ref;
};
exports.default = useLatest;
