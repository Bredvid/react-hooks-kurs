// Oppgave 1: Denne komponenten trenger å holde styr på en verdi. Denne verdien skal kunne økes og minkes ved hjelp av knappene. Verdien skal vises på siden.

import { useState } from "react";

const Oppgave_en_fasit = () => {
  const [value, setValue] = useState(0); // Bruker useState til å holde styr på verdien og starter med 0 som default

  return (
    <div>
      <h1>Oppgave 1</h1>
      <p>Verdien er: {value} </p>
      <button
        onClick={() => {
          setValue((previousValue) => previousValue + 1); // Endrer verdien ved å bruke setValue
        }}
      >
        Øk
      </button>
      <button
        onClick={() => {
          setValue((previousValue) => previousValue - 1); // Endrer verdien ved å bruke setValue
        }}
      >
        Mink
      </button>
    </div>
  );
};

export default Oppgave_en_fasit;
