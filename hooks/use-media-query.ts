import { useState, useEffect } from "react";

function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") {
      // Don't run on the server side
      return;
    }

    const mql = window.matchMedia(query);

    const listener = (event: MediaQueryListEvent) => {
      setMatches(event.matches);
    };

    setMatches(mql.matches);

    mql.addEventListener("change", listener);

    return () => {
      mql.removeEventListener("change", listener);
    };
  }, [query]);

  return matches;
}

export { useMediaQuery };
