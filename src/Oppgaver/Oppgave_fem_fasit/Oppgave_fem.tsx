// Oppgave 5: Nå har du prøvd å bruke tre av de innebygde hookene i React. Nå skal du prøve å lage din egen hook.
// I oppgave 3 hentet vi noe data fra et API. Nå skal vi lage en hook som gjør det enklere å hente ("fetche") data fra et API.
// Tips: husk at en hook bør starte med et bestemt ord og at du kan bruke useDebugValue (https://react.dev/reference/react/useDebugValue)
// med React Developer Tools (https://react.dev/learn/react-developer-tools)

import useFetch from "./useFetch"; // Importer hook som vi har laget

const Oppgave_fem = () => {
  // Bruker useFetch hooken vi lagde for å hente data fra et API
  const [data, isLoading, error] = useFetch(
    "https://api.chucknorris.io/jokes/random"
  );

  return (
    <div>
      <h1>Oppgave 5</h1>
      {/* Hvis isLoading er true vis "Laster...", hvis ikke vis vitsen */}
      {isLoading ? <p>Laster...</p> : <p>Vits: {data?.value}</p>}
      {error && <p>{error}</p>} {/* Skriver error hvis det er en error */}
    </div>
  );
};

export default Oppgave_fem;
