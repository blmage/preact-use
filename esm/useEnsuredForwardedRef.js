import { forwardRef, } from 'react';
import { useRef, useEffect } from 'preact/hooks';
export default function useEnsuredForwardedRef(forwardedRef) {
    var ensuredRef = useRef(forwardedRef && forwardedRef.current);
    useEffect(function () {
        if (!forwardedRef) {
            return;
        }
        forwardedRef.current = ensuredRef.current;
    }, [forwardedRef]);
    return ensuredRef;
}
export function ensuredForwardRef(Component) {
    return forwardRef(function (props, ref) {
        var ensuredRef = useEnsuredForwardedRef(ref);
        return Component(props, ensuredRef);
    });
}
