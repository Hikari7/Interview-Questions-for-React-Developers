import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./CounterSlice";
//reducerでincrementとdecrementを書いていく

function ChallengeD() {
    const count = useSelector((state) => state.value);
//   const count = useSelector((state) => console.log(state));
  const dispatch = useDispatch();

  console.log(count);

  return (
    <>
      <button onClick={() => dispatch(increment)}>+</button>
      <button onClick={() => dispatch(decrement)}>-</button>
      <div>{count}</div>
    </>
  );
}

export default ChallengeD;
