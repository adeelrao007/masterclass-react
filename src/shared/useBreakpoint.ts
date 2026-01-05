import { useWindowWidth } from "./useWindowWidth";

/**
 * Custom hook to get the current breakpoint as a string.
 * Returns one of: "mobile", "tablet", or "desktop".
 * Uses useWindowWidth and does not access the DOM directly.
 */
export function useBreakpoint(): "mobile" | "tablet" | "desktop" {
  const width = useWindowWidth();

  if (width < 768) {
    return "mobile";
  } else if (width < 1024) {
    return "tablet";
  } else {
    return "desktop";
  }
}
