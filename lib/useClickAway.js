"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var hooks_1 = require("preact/hooks");
var util_1 = require("./util");
var defaultEvents = ['mousedown', 'touchstart'];
var useClickAway = function (refs, onClickAway, events) {
    if (events === void 0) { events = defaultEvents; }
    var savedCallback = hooks_1.useRef(onClickAway);
    hooks_1.useEffect(function () {
        savedCallback.current = onClickAway;
    }, [onClickAway]);
    hooks_1.useEffect(function () {
        var handler = function (event) {
            var els = refs.map(function (ref) { return ref.current; }).filter(function (el) { return !!el; });
            (els.length > 0) && !els.some(function (el) { return el.contains(event.target); }) && savedCallback.current(event);
        };
        for (var _i = 0, events_1 = events; _i < events_1.length; _i++) {
            var eventName = events_1[_i];
            util_1.on(document, eventName, handler);
        }
        return function () {
            for (var _i = 0, events_2 = events; _i < events_2.length; _i++) {
                var eventName = events_2[_i];
                util_1.off(document, eventName, handler);
            }
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, tslib_1.__spreadArrays([events], refs));
};
exports.default = useClickAway;
