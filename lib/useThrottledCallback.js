"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var hooks_1 = require("preact/hooks");
var useThrottledCallback = function (fn, ms) {
    if (ms === void 0) { ms = 200; }
    var baseArgs = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        baseArgs[_i - 2] = arguments[_i];
    }
    var isThrottled = hooks_1.useRef(false);
    return hooks_1.useCallback(function () {
        var additionalArgs = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            additionalArgs[_i] = arguments[_i];
        }
        if (!isThrottled.current) {
            fn.apply(void 0, tslib_1.__spreadArrays(baseArgs, additionalArgs));
            isThrottled.current = true;
            setTimeout(function () { return (isThrottled.current = false); }, ms);
        }
    }, baseArgs.concat(fn, ms)); // eslint-disable-line react-hooks/exhaustive-deps
};
exports.default = useThrottledCallback;
