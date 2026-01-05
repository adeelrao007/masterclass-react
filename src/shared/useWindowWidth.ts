import { useState, useEffect } from "react";

/**
 * Custom hook to get the current window width.
 * Handles resize events and cleans up after itself.
 */
export function useWindowWidth() {
  const [width, setWidth] = useState(() => window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }
    window.addEventListener('resize', handleResize);
    // Set initial value in case resize happened before effect ran
    handleResize();
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return width;
}