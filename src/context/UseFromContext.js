import React, { createContext, useContext, useState } from "react";

const UserFormFunctionality = createContext({});

export function UseUserValues() {
  return useContext(UserFormFunctionality);
}

export function UserFormProvider({ children }) {
  const [toggle, setToggle] = useState("userData");

  return (
    <UserFormFunctionality.Provider value={{ toggle, setToggle }}>
      {children}
    </UserFormFunctionality.Provider>
  );
}
