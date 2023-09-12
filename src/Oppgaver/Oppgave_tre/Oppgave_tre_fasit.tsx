// Oppgave 3a: Når komponenten settes første gang skal det hentes data fra et API og vises.
// Du kan bruke den allerde implementerte logikken fra fetchChuckNorrisJoke eller et annet API du selv velger.
// Hvis datahenting i JavaScript er nytt for deg kan du spørre om hjelp :) eller lese mer her: https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Promises

// Tips: Hvis du henter data slik som vi tenkte vil du kanskje se at dataen endrer seg fra en verdi til en annen veldig raskt én gang.
// dette kommer av <React.StrictMode> som du kan lese mer om her hvis du vil: https://react.dev/reference/react/StrictMode#strictmode

// Oppgave 3b: Brukeren skal kunne trykke på en knapp for å hente ny data.

// Oppgave 3c: Hvis du har gjort oppgave 3a og 3b kan du nå prøve å legge til en loading state som vises mens dataen hentes.

import { useState, useEffect } from "react";
import { fetchRandomChuckNorrisJoke } from "./fetchChuckNorrisJoke";

const Oppgave_tre_fasit = () => {
  const [joke, setJoke] = useState("");
  const [newJoke, setNewJoke] = useState(false); // Brukes for å "toggle" om en ny vits skal hentes
  const [isLoading, setIsLoading] = useState(false); // Loading state for oppgave 3c

  useEffect(() => {
    setIsLoading(true);
    fetchRandomChuckNorrisJoke()
      .then((joke) => {
        setJoke(joke);
      })
      .catch((error) => {
        console.error(error); // Hvis error print error til console
      })
      .finally(() => {
        setIsLoading(false); // Sett isLoading til false uansett om det er error eller ikke
      });
  }, [newJoke]); // for oppgave 3a skulle denne være tom, men for oppgave 3b og 3c skal den ha en avhengighet i newJoke

  return (
    <div>
      <h1>Oppgave 3</h1>
      {/* Her brukes en Conditional (ternary) operator som sjekker om verdien laster */}
      {isLoading ? <p>Laster...</p> : <p>Vits: {joke}</p>}
      <button
        onClick={() => {
          setNewJoke(!newJoke);
        }}
      >
        Hent ny vits
      </button>
    </div>
  );
};

export default Oppgave_tre_fasit;
