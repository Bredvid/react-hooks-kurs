// Oppgave 4: I denne oppgaven har vi et tekstfelt som tar inn en farge på engelsk og endrer fargen på en knapp lengre ned.
// I dette eksempelet sendes state buttonColor fra Oppgave_fire.tsx til Oppgave_fire_barn.tsx og videre til Oppgave_fire_barnebarn.tsx.
// Dette er kjent som "prop drilling" og kan være en ulempe da "buttonColor" må sendes inn i Oppgave_fire_barn.tsx selv om den ikke brukes der.
// React har en hook som kan brukes til å løse dette problemet (wow så praktisk!).

import { useState } from "react";
import Oppgave_fire_barn from "./Oppgave_fire_barn";

const Oppgave_fire = () => {
  const [buttonColor, setButtonColor] = useState("Red");

  return (
    <div>
      <h1>Oppgave 4</h1>
      <label htmlFor="colorPicker">Farge velger engelsk:</label>
      <input
        type="text"
        id="colorPicker"
        name="colorPicker"
        placeholder="Farge velger engelsk"
        onChange={(e) => {
          setButtonColor(e.target.value);
        }}
        value={buttonColor}
      />
      <Oppgave_fire_barn buttonColor={buttonColor} />
    </div>
  );
};

export default Oppgave_fire;
