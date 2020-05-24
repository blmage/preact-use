export interface UseStateListReturn<T> {
    state: T;
    prevState: T;
    nextState: T;
    currentIndex: number;
    prevIndex: number;
    nextIndex: number;
    setStateAt: (newIndex: number) => void;
    setState: (state: T) => void;
    next: () => void;
    prev: () => void;
}
export default function useStateList<T>(stateSet?: T[], initialState?: T | undefined): UseStateListReturn<T>;
