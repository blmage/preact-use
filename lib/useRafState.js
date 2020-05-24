"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var hooks_1 = require("preact/hooks");
var useUnmount_1 = tslib_1.__importDefault(require("./useUnmount"));
var useRafState = function (initialState) {
    var frame = hooks_1.useRef(0);
    var _a = hooks_1.useState(initialState), state = _a[0], setState = _a[1];
    var setRafState = hooks_1.useCallback(function (value) {
        cancelAnimationFrame(frame.current);
        frame.current = requestAnimationFrame(function () {
            setState(value);
        });
    }, []);
    useUnmount_1.default(function () {
        cancelAnimationFrame(frame.current);
    });
    return [state, setRafState];
};
exports.default = useRafState;
