import { useState } from 'preact/hooks';
import { isFunction } from './util';
import useEffectOnce from './useEffectOnce';
import useIsomorphicLayoutEffect from './useIsomorphicLayoutEffect';
export function createGlobalState(initialState) {
    var store = {
        initialized: !isFunction(initialState),
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
        var _a = useState(store.state), globalState = _a[0], stateSetter = _a[1];
        useEffectOnce(function () { return function () {
            store.setters = store.setters.filter(function (setter) { return setter !== stateSetter; });
        }; });
        useIsomorphicLayoutEffect(function () {
            if (!store.setters.includes(stateSetter)) {
                store.setters.push(stateSetter);
            }
        });
        return [globalState, store.setState];
    };
}
export default createGlobalState;
