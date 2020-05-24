"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var hooks_1 = require("preact/hooks");
function useRendersCount() {
    return ++hooks_1.useRef(0).current;
}
exports.useRendersCount = useRendersCount;
