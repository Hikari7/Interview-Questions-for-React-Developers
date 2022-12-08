import React from "react";
import ChallengeAContext from "./ChallengeA_Context";

const ComponentA_Provider = ({ children }) => {
  const status = {
    stringA: "This is StringA from Usecontext",
    stringB: "This is StringB from Usecontext",
  };

  return (
    <ChallengeAContext.Provider value={status}>
      {children}
    </ChallengeAContext.Provider>
  );
};

export default ComponentA_Provider;
