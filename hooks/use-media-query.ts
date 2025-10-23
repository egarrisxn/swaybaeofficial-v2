import { useState, useEffect } from "react";

function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(() => {
    if (typeof window !== "undefined") {
      return window.matchMedia(query).matches;
    }

    return false;
  });

  useEffect(() => {
    if (typeof window === "undefined") return;

    const media = window.matchMedia(query);

    const listener = (event: MediaQueryListEvent) => setMatches(event.matches);
    media.addEventListener("change", listener);

    return () => {
      media.removeEventListener("change", listener);
    };
  }, [query]);

  return matches;
}

export { useMediaQuery };
