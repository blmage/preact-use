/* eslint-disable */
import { DependencyList } from 'react';
import { useMemo } from 'preact/hooks';
import useEvent, { UseEventTarget } from './useEvent';

export type KeyPredicate = (event: KeyboardEvent) => boolean;
export type KeyFilter = null | undefined | string | string[];
export type Handler = (event: KeyboardEvent) => void;
export type Callback = (key: string, event: KeyboardEvent) => void;

export interface UseKeyOptions {
  event?: 'keydown' | 'keypress' | 'keyup';
  discard?: boolean,
  target?: UseEventTarget;
  options?: any;
}

const noop = () => {};
const createKeyPredicate = (keyFilter: KeyFilter): KeyPredicate => {
  if (Array.isArray(keyFilter)) {
    const keys = keyFilter.map(key => String(key).toLowerCase());
    return (event: KeyboardEvent) => keys.indexOf(event.key.toLowerCase()) >= 0;
  } else if (typeof keyFilter === 'string') {
    const key = keyFilter.toLowerCase();
    return (event: KeyboardEvent) => event.key.toLowerCase() === key;
  }

  return keyFilter ? () => true : () => false;
}

const useKeyCi = (key: KeyFilter, fn: Callback = noop, opts: UseKeyOptions = {}, deps: DependencyList = [key]) => {
  const { event = 'keydown', target, options } = opts;
  const useMemoHandler = useMemo(() => {
    const predicate: KeyPredicate = createKeyPredicate(key);
    const handler: Handler = handlerEvent => {
      if (predicate(handlerEvent)) {
        if (opts.discard) {
          handlerEvent.preventDefault();
          handlerEvent.stopPropagation();
        }

        return fn(handlerEvent.key.toLowerCase(), handlerEvent);
      }
    };
    return handler;
  }, deps);
  useEvent(event, useMemoHandler, target, options);
};

export default useKeyCi;
