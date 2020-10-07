import { useState } from 'preact/hooks';
import { isFunction } from './util';
import useEffectOnce from './useEffectOnce';
import useIsomorphicLayoutEffect from './useIsomorphicLayoutEffect';

export function createGlobalState<S = any>(initialState?: S | (() => S)) {
  const store: {
    initialized: boolean;
    state: S | (() => S) | undefined;
    setState: (state: S) => void;
    setters: any[]
  } = {
    initialized: !isFunction(initialState),
    state: initialState,
    setState(state: S) {
      store.state = state;
      store.setters.forEach((setter) => setter(store.state));
    },
    setters: [],
  };

  return (): [S | undefined, (state: S) => void] => {
    if (!store.initialized) {
      // @ts-ignore
      store.state = store.state();
      store.initialized = true;
    }

    const [globalState, stateSetter] = useState<S | undefined>(store.state);

    useEffectOnce(() => () => {
      store.setters = store.setters.filter((setter) => setter !== stateSetter);
    });

    useIsomorphicLayoutEffect(() => {
      if (!store.setters.includes(stateSetter)) {
        store.setters.push(stateSetter);
      }
    });

    return [globalState, store.setState];
  };
}

export default createGlobalState;
