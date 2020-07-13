"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useFirstMountState = void 0;
var hooks_1 = require("preact/hooks");
function useFirstMountState() {
    var isFirst = hooks_1.useRef(true);
    if (isFirst.current) {
        isFirst.current = false;
        return true;
    }
    return isFirst.current;
}
exports.useFirstMountState = useFirstMountState;
