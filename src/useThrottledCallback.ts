import { useCallback, useRef } from 'preact/hooks';

export interface ThrottleOptions {
  delay?: 200;
  defer?: boolean;
}

const defaultOptions: ThrottleOptions = {
  delay: 200,
  defer: false,
};

const useThrottledCallback = (fn: Function, options: ThrottleOptions = defaultOptions, ...baseArgs: any[]) => {
  const isThrottled = useRef(false);
  const pendingCall = useRef<any[] | null>(null);

  const baseCallback = useCallback(
    (...args) => {
      if (!isThrottled.current) {
        isThrottled.current = true;
        pendingCall.current = null;
        fn(...args);

        setTimeout(() => {
          isThrottled.current = false;

          if (Array.isArray(pendingCall.current)) {
            baseCallback(...pendingCall.current);
          }
        }, options.delay);
      } else if (options.defer) {
        pendingCall.current = args;
      }
    },
    [fn, options.delay, options.defer]
  );

  return useCallback(
    (...additionalArgs) => baseCallback(...baseArgs, ...additionalArgs),
    [baseArgs.concat(baseCallback)] // eslint-disable-line react-hooks/exhaustive-deps
  );
};

export default useThrottledCallback;
