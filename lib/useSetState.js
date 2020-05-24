"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var hooks_1 = require("preact/hooks");
var useSetState = function (initialState) {
    if (initialState === void 0) { initialState = {}; }
    var _a = hooks_1.useState(initialState), state = _a[0], set = _a[1];
    var setState = hooks_1.useCallback(function (patch) {
        set(function (prevState) { return Object.assign({}, prevState, patch instanceof Function ? patch(prevState) : patch); });
    }, [set]);
    return [state, setState];
};
exports.default = useSetState;
