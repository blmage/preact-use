"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var hooks_1 = require("preact/hooks");
var resize_observer_polyfill_1 = tslib_1.__importDefault(require("resize-observer-polyfill"));
var useMeasureDirty = function (ref) {
    var frame = hooks_1.useRef(0);
    var _a = hooks_1.useState({
        width: 0,
        height: 0,
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    }), rect = _a[0], set = _a[1];
    var observer = hooks_1.useState(function () {
        return new resize_observer_polyfill_1.default(function (entries) {
            var entry = entries[0];
            if (entry) {
                cancelAnimationFrame(frame.current);
                frame.current = requestAnimationFrame(function () {
                    set(entry.contentRect);
                });
            }
        });
    })[0];
    hooks_1.useEffect(function () {
        observer.disconnect();
        if (ref.current) {
            observer.observe(ref.current);
        }
    }, [ref]);
    return rect;
};
exports.default = useMeasureDirty;
