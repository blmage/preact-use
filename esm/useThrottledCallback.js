import { __spreadArrays } from "tslib";
import { useCallback, useRef } from 'preact/hooks';
var defaultOptions = {
    delay: 200,
    defer: false,
};
var useThrottledCallback = function (fn, options) {
    if (options === void 0) { options = defaultOptions; }
    var baseArgs = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        baseArgs[_i - 2] = arguments[_i];
    }
    var isThrottled = useRef(false);
    var pendingCall = useRef(null);
    var baseCallback = useCallback(function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (!isThrottled.current) {
            isThrottled.current = true;
            pendingCall.current = null;
            fn.apply(void 0, args);
            setTimeout(function () {
                isThrottled.current = false;
                if (Array.isArray(pendingCall.current)) {
                    baseCallback.apply(void 0, pendingCall.current);
                }
            }, options.delay);
        }
        else if (options.defer) {
            pendingCall.current = args;
        }
    }, [fn, options.delay, options.defer]);
    return useCallback(function () {
        var additionalArgs = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            additionalArgs[_i] = arguments[_i];
        }
        return baseCallback.apply(void 0, __spreadArrays(baseArgs, additionalArgs));
    }, [baseArgs.concat(baseCallback)] // eslint-disable-line react-hooks/exhaustive-deps
    );
};
export default useThrottledCallback;
