import React from "react";
import { RecoilRoot } from "recoil";
import Counter from "./Counter";

const RecoilProvider = () => {
  return (
    <RecoilRoot>
      <Counter />
    </RecoilRoot>
  );
};

export default RecoilProvider;
