import { Ref, StateUpdater } from 'preact/hooks';
declare const useStateRef: <S>(initialState: S | (() => S)) => [S, Ref<S>, StateUpdater<S>];
export default useStateRef;
