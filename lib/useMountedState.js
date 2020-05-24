"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var hooks_1 = require("preact/hooks");
function useMountedState() {
    var mountedRef = hooks_1.useRef(false);
    var get = hooks_1.useCallback(function () { return mountedRef.current; }, []);
    hooks_1.useEffect(function () {
        mountedRef.current = true;
        return function () {
            mountedRef.current = false;
        };
    });
    return get;
}
exports.default = useMountedState;
