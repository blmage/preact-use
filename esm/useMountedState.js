import { useCallback, useEffect, useRef } from 'preact/hooks';
export default function useMountedState() {
    var mountedRef = useRef(false);
    var get = useCallback(function () { return mountedRef.current; }, []);
    useEffect(function () {
        mountedRef.current = true;
        return function () {
            mountedRef.current = false;
        };
    });
    return get;
}
