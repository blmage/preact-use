"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var hooks_1 = require("preact/hooks");
function useRafLoop(callback, initiallyActive) {
    if (initiallyActive === void 0) { initiallyActive = true; }
    var raf = hooks_1.useRef(null);
    var rafActivity = hooks_1.useRef(false);
    var rafCallback = hooks_1.useRef(callback);
    rafCallback.current = callback;
    var step = hooks_1.useCallback(function (time) {
        if (rafActivity.current) {
            rafCallback.current(time);
            raf.current = requestAnimationFrame(step);
        }
    }, []);
    var result = hooks_1.useMemo(function () { return [
        function () {
            if (rafActivity.current) {
                rafActivity.current = false;
                raf.current && cancelAnimationFrame(raf.current);
            }
        },
        function () {
            if (!rafActivity.current) {
                rafActivity.current = true;
                raf.current = requestAnimationFrame(step);
            }
        },
        function () { return rafActivity.current; } // isActive
        // eslint-disable-next-line react-hooks/exhaustive-deps
    ]; }, []);
    hooks_1.useEffect(function () {
        if (initiallyActive) {
            result[1]();
        }
        return result[0];
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return result;
}
exports.default = useRafLoop;
