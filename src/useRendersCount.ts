import { useRef } from 'preact/hooks';

export function useRendersCount(): number {
  return ++useRef(0).current;
}
