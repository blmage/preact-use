import { DependencyList } from 'react';
import { UseEventTarget } from './useEvent';
export declare type KeyPredicate = (event: KeyboardEvent) => boolean;
export declare type KeyFilter = null | undefined | string | string[];
export declare type Handler = (event: KeyboardEvent) => void;
export declare type Callback = (key: string) => void;
export interface UseKeyOptions {
    event?: 'keydown' | 'keypress' | 'keyup';
    target?: UseEventTarget;
    options?: any;
}
declare const useKeyCi: (key: KeyFilter, fn?: Callback, opts?: UseKeyOptions, deps?: DependencyList) => void;
export default useKeyCi;
