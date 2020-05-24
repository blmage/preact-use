import { useEffect } from 'preact/hooks';
import useAsyncFn from './useAsyncFn';
export default function useAsync(fn, deps) {
    if (deps === void 0) { deps = []; }
    var _a = useAsyncFn(fn, deps, {
        loading: true,
    }), state = _a[0], callback = _a[1];
    useEffect(function () {
        callback();
    }, [callback]);
    return state;
}
