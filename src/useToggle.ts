import { useReducer, Reducer } from 'preact/hooks';

const toggleReducer = (state: boolean, nextValue?: any) => (typeof nextValue === 'boolean' ? nextValue : !state);

const useToggle = (initialValue: boolean): [boolean, (nextValue?: any) => void] => {
  return useReducer<boolean, Reducer<boolean, any>>(toggleReducer, initialValue);
};

export default useToggle;
