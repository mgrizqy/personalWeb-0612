
import { useState, useEffect } from 'react';


export function useMediaQuery(query: string): boolean  {
  // Check if window is defined to prevent errors during server-side rendering
  const isSsr = typeof window === 'undefined';
  
  const [matches, setMatches] = useState(isSsr ? false : window.matchMedia(query).matches);


  useEffect(() => {
    if (isSsr) return;


    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => setMatches(media.matches);
    window.addEventListener('resize', listener);
    return () => window.removeEventListener('resize', listener);
  }, [matches, query, isSsr]);


  return matches;
}
