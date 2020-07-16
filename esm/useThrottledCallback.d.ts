declare const useThrottledCallback: (fn: Function, ms?: number, ...baseArgs: any[]) => (...additionalArgs: any[]) => void;
export default useThrottledCallback;
