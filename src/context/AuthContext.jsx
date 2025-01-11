/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext({
  setUser: (user) => {},
  user: null,
});

export const AuthContextProvider = ({ children }) => {
  const getUser = localStorage.getItem("user");
  const [user, setUser] = useState(getUser ? JSON.parse(getUser) : null);
  console.log(user);
  useEffect(() => {
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
    }
  }, [user]);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(AuthContext);
};
