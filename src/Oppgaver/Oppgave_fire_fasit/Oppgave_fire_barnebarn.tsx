// Denne komponenten bruker buttonColor og har bruk for den

import { useButtonColorContext } from "./Context";

const Oppgave_fire_barnebarn = () => {
  const buttonColor = useButtonColorContext(); // Her henter vi ut verdien fra Context

  return (
    <div>
      <h3>Barnebarn</h3>
      <button
        style={{ backgroundColor: buttonColor }}
        onClick={() => alert(`I'm ${buttonColor}!`)}
      >
        Trykk på meg
      </button>
    </div>
  );
};

export default Oppgave_fire_barnebarn;
