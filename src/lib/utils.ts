import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function interleave<T, U>(
  arr: T[],
  el: U | ((i: number) => U),
): (T | U)[] {
  const res = [] as (T | U)[];
  let i = 0;
  if (i < arr.length) res.push(arr[i++]);
  while (i < arr.length)
    res.push(
      typeof el === "function" ? (el as (i: number) => U)(i) : el,
      arr[i++],
    );
  return res;
}
