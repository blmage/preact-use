import { useRef } from 'preact/hooks';
export function useRendersCount() {
    return ++useRef(0).current;
}
