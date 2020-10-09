import { __spreadArrays } from "tslib";
import { useEffect, useRef } from 'preact/hooks';
import { off, on } from './util';
var defaultEvents = ['mousedown', 'touchstart'];
var useClickAway = function (refs, onClickAway, events) {
    if (events === void 0) { events = defaultEvents; }
    var savedCallback = useRef(onClickAway);
    useEffect(function () {
        savedCallback.current = onClickAway;
    }, [onClickAway]);
    useEffect(function () {
        var handler = function (event) {
            var els = refs.map(function (ref) { return ref.current; }).filter(function (el) { return !!el; });
            (els.length > 0) && !els.some(function (el) { return el.contains(event.target); }) && savedCallback.current(event);
        };
        for (var _i = 0, events_1 = events; _i < events_1.length; _i++) {
            var eventName = events_1[_i];
            on(document, eventName, handler);
        }
        return function () {
            for (var _i = 0, events_2 = events; _i < events_2.length; _i++) {
                var eventName = events_2[_i];
                off(document, eventName, handler);
            }
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, __spreadArrays([events], refs));
};
export default useClickAway;
