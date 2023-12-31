import "./App.css";
import Oppgave_en from "./Oppgaver/Oppgave_en/Oppgave_en";
import Oppgave_to from "./Oppgaver/Oppgave_to/Oppgave_to";
import Oppgave_tre from "./Oppgaver/Oppgave_tre/Oppgave_tre";
import Oppgave_fire from "./Oppgaver/Oppgave_fire/Oppgave_fire";
import Oppgave_fem from "./Oppgaver/Oppgave_fem/Oppgave_fem";

function App() {
  return (
    <>
      <Oppgave_en />
      <hr />
      <Oppgave_to />
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
