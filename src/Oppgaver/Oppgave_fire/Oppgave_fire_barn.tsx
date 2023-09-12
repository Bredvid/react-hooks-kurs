// Dette er en mellomkomponent som ikke bruker buttonColor til noe
// Siden verdien ikke brukes her gjør det at komponenten blir mer komplisert enn den trenger å være
// Dette er et veldig kunstig eksempel, men man kan skjønne at dette kan bli et problem i større prosjekter

import Oppgave_fire_barnebarn from "./Oppgave_fire_barnebarn";

type props = {
  buttonColor: string;
};

const Oppgave_fire_barn = ({ buttonColor }: props) => {
  return (
    <div>
      <h2>Barn</h2>
      <Oppgave_fire_barnebarn buttonColor={buttonColor} />
    </div>
  );
};

export default Oppgave_fire_barn;
