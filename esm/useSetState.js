import { useCallback, useState } from 'preact/hooks';
var useSetState = function (initialState) {
    if (initialState === void 0) { initialState = {}; }
    var _a = useState(initialState), state = _a[0], set = _a[1];
    var setState = useCallback(function (patch) {
        set(function (prevState) { return Object.assign({}, prevState, patch instanceof Function ? patch(prevState) : patch); });
    }, [set]);
    return [state, setState];
};
export default useSetState;
