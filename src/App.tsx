import "./App.css";
//import Oppgave_en from "./Oppgaver/Oppgave_en/Oppgave_en";
import Oppgave_en_fasit from "./Oppgaver/Oppgave_en/Oppgave_en_fasit";
//import Oppgave_to from "./Oppgaver/Oppgave_to/Oppgave_to";
import Oppgave_to_fasit from "./Oppgaver/Oppgave_to/Oppgave_to_fasit";
//import Oppgave_tre from "./Oppgaver/Oppgave_tre/Oppgave_tre";
import Oppgave_tre_fasit from "./Oppgaver/Oppgave_tre/Oppgave_tre_fasit";
//import Oppgave_fire from "./Oppgaver/Oppgave_fire/Oppgave_fire";
import Oppgave_fire_fasit from "./Oppgaver/Oppgave_fire_fasit/Oppgave_fire";
//import Oppgave_fem from "./Oppgaver/Oppgave_fem/Oppgave_fem";
import Oppgave_fem_fasit from "./Oppgaver/Oppgave_fem_fasit/Oppgave_fem";

function App() {
  return (
    <>
      <Oppgave_en_fasit />
      <hr />
      <Oppgave_to_fasit />
      <hr />
      <Oppgave_tre_fasit />
      <hr />
      <Oppgave_fire_fasit />
      <hr />
      <Oppgave_fem_fasit />
    </>
  );
}

export default App;
