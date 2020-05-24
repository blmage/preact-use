import {useRef} from 'preact/hooks';

const useLatest = <T>(value: T): {readonly current: T} => {
  const ref = useRef(value);
  ref.current = value;
  return ref;
};

export default useLatest;
