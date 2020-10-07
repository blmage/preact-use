"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var hooks_1 = require("preact/hooks");
var useUnmount_1 = tslib_1.__importDefault(require("./useUnmount"));
var useThrottleFn = function (fn, ms, args) {
    if (ms === void 0) { ms = 200; }
    var _a = hooks_1.useState(null), state = _a[0], setState = _a[1];
    var timeout = hooks_1.useRef();
    var nextArgs = hooks_1.useRef();
    hooks_1.useEffect(function () {
        if (!timeout.current) {
            setState(fn.apply(void 0, args));
            var timeoutCallback_1 = function () {
                if (nextArgs.current) {
                    setState(fn.apply(void 0, nextArgs.current));
                    // @ts-ignore
                    nextArgs.current = undefined;
                    timeout.current = setTimeout(timeoutCallback_1, ms);
                }
                else {
                    // @ts-ignore
                    timeout.current = undefined;
                }
            };
            timeout.current = setTimeout(timeoutCallback_1, ms);
        }
        else {
            nextArgs.current = args;
        }
    }, args);
    useUnmount_1.default(function () {
        timeout.current && clearTimeout(timeout.current);
    });
    return state;
};
exports.default = useThrottleFn;
