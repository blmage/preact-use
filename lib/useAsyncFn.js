"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var hooks_1 = require("preact/hooks");
var useMountedState_1 = tslib_1.__importDefault(require("./useMountedState"));
function useAsyncFn(fn, deps, initialState) {
    if (deps === void 0) { deps = []; }
    if (initialState === void 0) { initialState = { loading: false }; }
    var lastCallId = hooks_1.useRef(0);
    var isMounted = useMountedState_1.default();
    var _a = hooks_1.useState(initialState), state = _a[0], set = _a[1];
    var callback = hooks_1.useCallback(function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var callId = ++lastCallId.current;
        set(function (prevState) { return (tslib_1.__assign(tslib_1.__assign({}, prevState), { loading: true })); });
        return fn.apply(void 0, args).then(function (value) {
            isMounted() && callId === lastCallId.current && set({ value: value, loading: false });
            return value;
        }, function (error) {
            isMounted() && callId === lastCallId.current && set({ error: error, loading: false });
            return error;
        });
    }, deps);
    return [state, callback];
}
exports.default = useAsyncFn;
