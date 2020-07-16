import { useCallback, useRef } from 'preact/hooks';

const useThrottledCallback = (fn: Function, ms: number = 200, ...baseArgs: any[]) => {
  const isThrottled = useRef(false);

  return useCallback((...additionalArgs) => {
    if (!isThrottled.current) {
      fn(...baseArgs, ...additionalArgs);
      isThrottled.current = true;
      setTimeout(() => (isThrottled.current = false), ms);
    }
  }, baseArgs.concat(fn, ms)); // eslint-disable-line react-hooks/exhaustive-deps
};

export default useThrottledCallback;
