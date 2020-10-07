import { Dispatch, SetStateAction } from 'react';
import { useCallback, useRef, useState } from 'preact/hooks';

export interface StateMediator<S = any> {
  (newState: any): S;

  (newState: any, dispatch: Dispatch<SetStateAction<S>>): void;
}

export type UseMediatedStateReturn<S = any> = [S, Dispatch<SetStateAction<S>>];

export function useMediatedState<S = undefined>(
  mediator: StateMediator<S | undefined>
): UseMediatedStateReturn<S | undefined>;
export function useMediatedState<S = any>(mediator: StateMediator<S>, initialState: S): UseMediatedStateReturn<S>;

export function useMediatedState<S = any>(mediator: StateMediator<S>, initialState?: S): UseMediatedStateReturn<S> {
  const mediatorFn = useRef(mediator);

  const [state, setMediatedState] = useState<S>(initialState!);
  const setState = useCallback(
    (newState: any) => {
      if (mediatorFn.current.length === 2) {
        mediatorFn.current(newState, setMediatedState);
      } else {
        setMediatedState(mediatorFn.current(newState));
      }
    },
    [state]
  );

  return [state, setState];
}
