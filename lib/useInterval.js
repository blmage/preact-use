"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var hooks_1 = require("preact/hooks");
var useInterval = function (callback, delay) {
    var savedCallback = hooks_1.useRef(function () { });
    hooks_1.useEffect(function () {
        savedCallback.current = callback;
    });
    hooks_1.useEffect(function () {
        if (delay !== null) {
            var interval_1 = setInterval(function () { return savedCallback.current(); }, delay || 0);
            return function () { return clearInterval(interval_1); };
        }
        return undefined;
    }, [delay]);
};
exports.default = useInterval;
