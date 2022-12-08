import React, { useContext } from "react";
import ChallengeAContext from "../components_A/ChallengeA_Context";

const ChallengeC = () => {
  const status = useContext(ChallengeAContext);

  return (
    <>
      <h2 className="yellow">Challenge C</h2>
      <p className="pink">{status.stringA}</p>
      <p className="blue">{status.stringB}</p>
    </>
  );
};

export default ChallengeC;
