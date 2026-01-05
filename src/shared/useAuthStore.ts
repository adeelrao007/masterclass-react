import { useState, useCallback } from "react";

/**
 * Auth store hook for managing user authentication state.
 * No async, no API calls, pure state transitions.
 */
export function useAuthStore<TUser = any>(initialUser: TUser = null) {
  const [user, setUser] = useState<TUser | null>(initialUser);

  const login = useCallback((newUser: TUser) => {
    setUser(newUser);
  }, []);

  const logout = useCallback(() => {
    setUser(null);
  }, []);

  return { user, login, logout };
}
