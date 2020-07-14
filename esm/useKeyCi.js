import { useMemo } from 'preact/hooks';
import useEvent from './useEvent';
var noop = function () { };
var createKeyPredicate = function (keyFilter) {
    if (Array.isArray(keyFilter)) {
        var keys_1 = keyFilter.map(function (key) { return String(key).toLowerCase(); });
        return function (event) { return keys_1.indexOf(event.key.toLowerCase()) >= 0; };
    }
    else if (typeof keyFilter === 'string') {
        var key_1 = keyFilter.toLowerCase();
        return function (event) { return event.key.toLowerCase() === key_1; };
    }
    return keyFilter ? function () { return true; } : function () { return false; };
};
var useKeyCi = function (key, fn, opts, deps) {
    if (fn === void 0) { fn = noop; }
    if (opts === void 0) { opts = {}; }
    if (deps === void 0) { deps = [key]; }
    var _a = opts.event, event = _a === void 0 ? 'keydown' : _a, target = opts.target, options = opts.options;
    var useMemoHandler = useMemo(function () {
        var predicate = createKeyPredicate(key);
        var handler = function (handlerEvent) {
            if (predicate(handlerEvent)) {
                if (opts.discard) {
                    handlerEvent.preventDefault();
                    handlerEvent.stopPropagation();
                }
                return fn(handlerEvent.key.toLowerCase(), handlerEvent);
            }
        };
        return handler;
    }, deps);
    useEvent(event, useMemoHandler, target, options);
};
export default useKeyCi;
