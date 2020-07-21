export interface ThrottleOptions {
    delay?: 200;
    defer?: boolean;
}
declare const useThrottledCallback: (fn: Function, options?: ThrottleOptions, ...baseArgs: any[]) => (...additionalArgs: any[]) => void;
export default useThrottledCallback;
