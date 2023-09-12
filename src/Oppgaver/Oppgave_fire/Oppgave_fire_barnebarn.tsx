// Denne komponenten bruker buttonColor og har bruk for den

type props = {
  buttonColor: string;
};

const Oppgave_fire_barnebarn = ({ buttonColor }: props) => {
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
