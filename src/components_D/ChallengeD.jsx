import React, { useContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import ChallengeAContext from "../components_A/ChallengeA_Context";

import { increment, decrement } from "./CounterSlice";
//reducerでincrementとdecrementを書いていく

function ChallengeD() {
  const status = useContext(ChallengeAContext);

  const count = useSelector((state) => state.value);
  //  const count = useSelector((state) => console.log(state));
  const dispatch = useDispatch();

  return (
    <>
      <h2 className="yellow">Challenge D</h2>
      <p className="pink">{status.stringA}</p>
      <p className="blue">{status.stringB}</p>
      <button onClick={() => dispatch(increment)}>+</button>
      <button onClick={() => dispatch(decrement)}>-</button>
      <div>{count}</div>
    </>
  );
}

export default ChallengeD;
