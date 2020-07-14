import { useCallback, useRef, useState } from 'preact/hooks';
var useStateRef = function (initialState) {
    var _a = useState(initialState), state = _a[0], set = _a[1];
    var stateRef = useRef(state);
    var readOnlyRef = useRef({
        get current() {
            return stateRef.current;
        }
    });
    var setState = useCallback(function (updated) {
        set(updated);
        stateRef.current = updated;
    }, [set]);
    return [state, readOnlyRef.current, setState];
};
export default useStateRef;
