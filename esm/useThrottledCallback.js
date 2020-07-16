import { __spreadArrays } from "tslib";
import { useCallback, useRef } from 'preact/hooks';
var useThrottledCallback = function (fn, ms) {
    if (ms === void 0) { ms = 200; }
    var baseArgs = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        baseArgs[_i - 2] = arguments[_i];
    }
    var isThrottled = useRef(false);
    return useCallback(function () {
        var additionalArgs = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            additionalArgs[_i] = arguments[_i];
        }
        if (!isThrottled.current) {
            fn.apply(void 0, __spreadArrays(baseArgs, additionalArgs));
            isThrottled.current = true;
            setTimeout(function () { return (isThrottled.current = false); }, ms);
        }
    }, baseArgs.concat(fn, ms)); // eslint-disable-line react-hooks/exhaustive-deps
};
export default useThrottledCallback;
