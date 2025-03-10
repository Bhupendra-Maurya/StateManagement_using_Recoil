import { atom, selector } from "recoil";

const counterAtom = atom({
  key: "counterAtom",
  default: 0,
});

export const counterSelector = selector({
  key: "counterSelector",
  get: ({ get }) => {
    const count = get(counterAtom);
    return count;
  },
});

export const evenSelector = selector({
  key: "evenSelector",
  get: ({ get }) => {
    const count = get(counterAtom);
    return count % 2 === 0;
  },
});

export default counterAtom;
