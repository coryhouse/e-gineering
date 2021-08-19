import React, { useContext } from "react";

export type UserContextType = {
  name: string;
  email: string;
  role: "user" | "admin";
  token: string;
};

const UserContext = React.createContext<UserContextType | undefined>(undefined);

type UserContextProviderProps = {
  children: React.ReactNode; // accept any valid JSX
  value: UserContextType;
};

// We'll wrap our app with this component so any child components can consume the global data.
export function UserContextProvider(props: UserContextProviderProps) {
  return (
    <UserContext.Provider value={props.value}>
      {props.children}
    </UserContext.Provider>
  );
}

// Custom hook to consume the user data from any component.
export function useUserContext() {
  const userContext = useContext(UserContext);
  if (!userContext)
    throw new Error("useUserContext must be wrapped in UserContextProvider.");
  return userContext;
}
