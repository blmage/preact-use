"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createGlobalState = void 0;
var tslib_1 = require("tslib");
var hooks_1 = require("preact/hooks");
var util_1 = require("./util");
var useEffectOnce_1 = tslib_1.__importDefault(require("./useEffectOnce"));
var useIsomorphicLayoutEffect_1 = tslib_1.__importDefault(require("./useIsomorphicLayoutEffect"));
function createGlobalState(initialState) {
    var store = {
        initialized: !util_1.isFunction(initialState),
        state: initialState,
        setState: function (state) {
            store.state = state;
            store.setters.forEach(function (setter) { return setter(store.state); });
        },
        setters: [],
    };
    return function () {
        if (!store.initialized) {
            // @ts-ignore
            store.state = store.state();
            store.initialized = true;
        }
        var _a = hooks_1.useState(store.state), globalState = _a[0], stateSetter = _a[1];
        useEffectOnce_1.default(function () { return function () {
            store.setters = store.setters.filter(function (setter) { return setter !== stateSetter; });
        }; });
        useIsomorphicLayoutEffect_1.default(function () {
            if (!store.setters.includes(stateSetter)) {
                store.setters.push(stateSetter);
            }
        });
        return [globalState, store.setState];
    };
}
exports.createGlobalState = createGlobalState;
exports.default = createGlobalState;
