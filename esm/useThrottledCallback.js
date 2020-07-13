import { useCallback, useRef } from 'preact/hooks';
var useThrottledCallback = function (fn, ms) {
    if (ms === void 0) { ms = 200; }
    var args = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        args[_i - 2] = arguments[_i];
    }
    var timeout = useRef();
    return useCallback(function () {
        if (!timeout.current) {
            fn.apply(void 0, args);
            timeout.current = setTimeout(function () {
                timeout.current = null;
            }, ms);
        }
    }, args.concat(fn, ms)); // eslint-disable-line react-hooks/exhaustive-deps
};
export default useThrottledCallback;
