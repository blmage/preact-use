import { useCallback, useRef, useState, Ref, StateUpdater } from 'preact/hooks';

const useStateRef = <S>(initialState: S | (() => S)): [S, Ref<S>, StateUpdater<S>] => {
  const [state, set] = useState<S>(initialState);
  const stateRef = useRef(state);

  const readOnlyRef = useRef({
    get current() {
      return stateRef.current;
    }
  });

  const setState = useCallback(updated => {
    set(updated);
    stateRef.current = updated;
  }, [set]);

  return [state, readOnlyRef.current, setState];
};

export default useStateRef;
