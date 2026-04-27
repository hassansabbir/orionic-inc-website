"use client";

import { useEffect, useState } from "react";

/**
 * Hook to check if a component is mounted
 * Useful for handling hydration issues or safe state updates
 */
export function useIsMounted() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
    return () => setMounted(false);
  }, []);


  return mounted;
}
