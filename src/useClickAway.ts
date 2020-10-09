import { RefObject } from 'react';
import { useEffect, useRef } from 'preact/hooks';
import { off, on } from './util';

const defaultEvents = ['mousedown', 'touchstart'];

const useClickAway = <E extends Event = Event>(
  refs: RefObject<HTMLElement | null>[],
  onClickAway: (event: E) => void,
  events: string[] = defaultEvents
) => {
  const savedCallback = useRef(onClickAway);
  useEffect(() => {
    savedCallback.current = onClickAway;
  }, [onClickAway]);
  useEffect(() => {
    const handler = (event) => {
      const els = refs.map(ref => ref.current).filter(el => !!el);
      (els.length > 0) && !els.some(el => el!.contains(event.target)) && savedCallback.current(event);
    };
    for (const eventName of events) {
      on(document, eventName, handler);
    }
    return () => {
      for (const eventName of events) {
        off(document, eventName, handler);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [events, ...refs]);
};

export default useClickAway;
