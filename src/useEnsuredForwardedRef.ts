import {
  forwardRef,
  MutableRefObject,
  ForwardRefExoticComponent,
  PropsWithoutRef,
  RefAttributes,
  RefForwardingComponent,
  PropsWithChildren,
} from 'react';

import{ useRef, useEffect } from 'preact/hooks';

export default function useEnsuredForwardedRef<T>(forwardedRef: MutableRefObject<T>): MutableRefObject<T> {
  const ensuredRef = useRef(forwardedRef && forwardedRef.current);

  useEffect(() => {
    if (!forwardedRef) {
      return;
    }
    forwardedRef.current = ensuredRef.current;
  }, [forwardedRef]);

  return ensuredRef;
}

export function ensuredForwardRef<T, P = {}>(
  Component: RefForwardingComponent<T, P>
): ForwardRefExoticComponent<PropsWithoutRef<P> & RefAttributes<T>> {
  return forwardRef((props: PropsWithChildren<P>, ref) => {
    const ensuredRef = useEnsuredForwardedRef(ref as MutableRefObject<T>);
    return Component(props, ensuredRef);
  });
}
