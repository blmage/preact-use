import { useCallback, useRef } from 'preact/hooks';

const useThrottledCallback = (fn: Function, ms: number = 200, ...args: any[]) => {
  const timeout = useRef();

  return useCallback(() => {
    if (!timeout.current) {
      fn(...args);

      timeout.current = setTimeout(() => {
        timeout.current = null;
      }, ms);
    }
  }, args.concat(fn, ms)); // eslint-disable-line react-hooks/exhaustive-deps
};

export default useThrottledCallback;
