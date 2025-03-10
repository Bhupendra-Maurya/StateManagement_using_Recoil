import React from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import counterAtom, {
  counterSelector,
  evenSelector,
} from "../store/atoms/CounterState";

const Counter = () => {
  const count = useRecoilValue(counterAtom);
  const setCount = useSetRecoilState(counterAtom);
  const doubleCount = useRecoilValue(counterSelector);
  const isEven = useRecoilValue(evenSelector);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <h2>
        Count: {count} {isEven ? "Even" : ""}
      </h2>

      <button
        onClick={() => {
          if (count > 0) setCount(count - 1);
        }}
      >
        Decrement
      </button>
      <button onClick={() => setCount(count * 2)}>Double</button>
      <h2>Double: {doubleCount}</h2>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
};

export default Counter;
