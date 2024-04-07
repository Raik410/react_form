import { useEffect, useRef } from "react";

export type SomeFunc = (...args: never[]) => void | Promise<void>;
type Timer = ReturnType<typeof setTimeout>;

export function useDebounce<Func extends SomeFunc>(func: Func, delay: number) {
  const timer = useRef<Timer>();

  useEffect(() => {
    return () => {
      if (!timer.current) return;
      clearTimeout(timer.current);
    };
  }, []);

  const debounceFunction = ((...args) => {
    const newTimer = setTimeout(() => {
      void func(...args);
    }, delay);
    clearTimeout(timer.current);
    timer.current = newTimer;
  }) as Func;

  return debounceFunction;
}
