import { atom } from "recoil";

export interface CounterState {
  count: number;
}

export const counterAtom = atom<CounterState>({
  key: "counter-store",
  default: {
    count: 0,
  },
});
