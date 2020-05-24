import { DependencyList } from 'react';
import { useEffect } from 'preact/hooks';
import useAsyncFn from './useAsyncFn';
import { FnReturningPromise } from './util';

export { AsyncState, AsyncFnReturn } from './useAsyncFn';

export default function useAsync<T extends FnReturningPromise>(fn: T, deps: DependencyList = []) {
  const [state, callback] = useAsyncFn(fn, deps, {
    loading: true,
  });

  useEffect(() => {
    callback();
  }, [callback]);

  return state;
}
