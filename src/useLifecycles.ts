/* eslint-disable */
import { useEffect } from 'preact/hooks';

const useLifecycles = (mount, unmount?) => {
  useEffect(() => {
    if (mount) {
      mount();
    }
    return () => {
      if (unmount) {
        unmount();
      }
    };
  }, []);
};

export default useLifecycles;
