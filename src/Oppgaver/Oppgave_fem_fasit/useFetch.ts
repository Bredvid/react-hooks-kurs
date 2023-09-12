import { useState, useEffect, useDebugValue } from "react";

// I useFetch bruker vi både useState og useEffect for å lage en custom hook
// som kan hente data fra en URL. Vi bruker også useDebugValue for å gi mer
// informasjon til React DevTools

const useFetch = (url: string) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // useDebugValue for å gi mer informasjon til React DevTools
  useDebugValue(isLoading ? "Laster data" : "Ferdig med å laste data");
  useDebugValue(error ? "Det skjedde en feil" : "Ingen feil");
  // Hvis data er null, viser vi "Ingen data", ellers viser vi data.value som er vitsen
  useDebugValue(data, (data) => data?.value);

  useEffect(() => {
    setIsLoading(true);
    fetch(url, {
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((error) => setError(error))
      .finally(() => setIsLoading(false));
  }, [url]);

  return [data, isLoading, error];
};

export default useFetch;
