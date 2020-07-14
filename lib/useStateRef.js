"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var hooks_1 = require("preact/hooks");
var useStateRef = function (initialState) {
    var _a = hooks_1.useState(initialState), state = _a[0], set = _a[1];
    var stateRef = hooks_1.useRef(state);
    var readOnlyRef = hooks_1.useRef({
        get current() {
            return stateRef.current;
        }
    });
    var setState = hooks_1.useCallback(function (updated) {
        set(updated);
        stateRef.current = updated;
    }, [set]);
    return [state, readOnlyRef.current, setState];
};
exports.default = useStateRef;
