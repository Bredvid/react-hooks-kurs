// Oppgave 2: I denne komponenten er det en bug. Fiks denne bugen uten å bruke tallet "3".
// Reflekter: Hvorfor skjer dette?

import { useState } from "react";

const Oppgave_to = () => {
  const [value, setValue] = useState(0);

  const increaseValueByThree = () => {
    // Dette var en vanlig bug og løsningen bruker en "updater function" slik at React holder styr på verdien til "value"
    // istedenfor å kun bruke den gamle verdien til "value" slik setValue(value + 1) gjorde.
    // Det er vanlig å la previousValue hete første bokstav av staten i en updater function (her ville det vært "v" for "value")
    setValue((previousValue) => previousValue + 1);
    setValue((previousValue) => previousValue + 1);
    setValue((previousValue) => previousValue + 1);
  };

  return (
    <div>
      <h1>Oppgave 2</h1>
      <p>Verdien er: {value}</p>
      <button onClick={() => setValue(value + 1)}>Øk med 1</button>
      <button onClick={() => increaseValueByThree()}>Øk med 3</button>
    </div>
  );
};

export default Oppgave_to;
