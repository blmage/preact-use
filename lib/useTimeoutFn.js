"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var hooks_1 = require("preact/hooks");
function useTimeoutFn(fn, ms) {
    if (ms === void 0) { ms = 0; }
    var ready = hooks_1.useRef(false);
    var timeout = hooks_1.useRef();
    var callback = hooks_1.useRef(fn);
    var isReady = hooks_1.useCallback(function () { return ready.current; }, []);
    var set = hooks_1.useCallback(function () {
        ready.current = false;
        timeout.current && clearTimeout(timeout.current);
        timeout.current = setTimeout(function () {
            ready.current = true;
            callback.current();
        }, ms);
    }, [ms]);
    var clear = hooks_1.useCallback(function () {
        ready.current = null;
        timeout.current && clearTimeout(timeout.current);
    }, []);
    // update ref when function changes
    hooks_1.useEffect(function () {
        callback.current = fn;
    }, [fn]);
    // set on mount, clear on unmount
    hooks_1.useEffect(function () {
        set();
        return clear;
    }, [ms]);
    return [isReady, clear, set];
}
exports.default = useTimeoutFn;
