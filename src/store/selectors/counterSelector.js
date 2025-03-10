import counterAtom from "../atoms/counterAtom.js";
import { selector } from "recoil";

export const counterSelector = selector({
  key: "counterSelector",
  get: ({ get }) => {
    const count = get(counterAtom);
    return count;
  },
});

