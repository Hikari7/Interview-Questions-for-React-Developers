import "./App.css";
import ChallengeA from "./components_A/ChallengeA";
import ComponentA_Provider from "./components_A/ComponentA_Provider";
import ChallengeB from "./components_B/ChallengeB";
import ChallengeC from "./components_C/ChallengeC";
import ChallengeD from "./components_D/ChallengeD";

function App() {
  return (
    <>
      <ComponentA_Provider>
        <ChallengeA />
        <hr></hr>
        <ChallengeB />
        <hr></hr>
        <ChallengeC />
        <hr></hr>
        <ChallengeD />
      </ComponentA_Provider>
    </>
  );
}

export default App;
