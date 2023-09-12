import "./App.css";
//import Oppgave_en from "./Oppgaver/Oppgave_en/Oppgave_en";
import Oppgave_en_fasit from "./Oppgaver/Oppgave_en/Oppgave_en_fasit";
//import Oppgave_to from "./Oppgaver/Oppgave_to/Oppgave_to";
import Oppgave_to_fasit from "./Oppgaver/Oppgave_to/Oppgave_to_fasit";

import Oppgave_tre from "./Oppgaver/Oppgave_tre/Oppgave_tre";
import Oppgave_fire from "./Oppgaver/Oppgave_fire/Oppgave_fire";
import Oppgave_fem from "./Oppgaver/Oppgave_fem/Oppgave_fem";

function App() {
  return (
    <>
      <Oppgave_en_fasit />
      <hr />
      <Oppgave_to_fasit />
      <hr />
      <Oppgave_tre />
      <hr />
      <Oppgave_fire />
      <hr />
      <Oppgave_fem />
    </>
  );
}

export default App;
