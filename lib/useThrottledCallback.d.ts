declare const useThrottledCallback: (fn: Function, ms?: number, ...args: any[]) => () => void;
export default useThrottledCallback;
