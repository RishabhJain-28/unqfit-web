"use client";

import { createContext, useContext, useState } from "react";
import { API } from "../../clientApi";
import { AuthDto, UserResponseDto } from "../../clientApi/.generated";

interface AuthInterface {
  user: UserResponseDto | null;
  signIn: (_: AuthDto) => Promise<void>;
}

const AuthContext = createContext<AuthInterface | null>(null);

export function AuthProvider({ children }: React.PropsWithChildren<{}>) {
  const [user, setUser] = useState<UserResponseDto | null>(null);
  //! error handling?
  // ! dispatch errors and show pops ?
  const signIn = async (authDto: AuthDto) => {
    console.log(authDto);
    try {
      const data = await API.authControllerSignin(authDto).then(
        (res) => res.data
      );
      console.log(data);
      setUser(data);
    } catch (err) {
      console.log(err);
    }
  };

  const signUp = async () => {};

  const signOut = async () => {};

  return (
    <AuthContext.Provider
      value={{
        user,
        signIn,
        // setNumber: (value: number) => setNumber(value),
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
export const useAuthContext = () => {
  const currentUserContext = useContext(AuthContext);

  if (!currentUserContext) {
    throw new Error(
      "useCurrentUser has to be used within <CurrentUserContext.Provider>"
    );
  }

  return currentUserContext;
};
