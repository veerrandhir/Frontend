// It work on UserContext.js
// We need to keep fragments so we can use context to manipulate and access all data change or effects
import React from "react";

import UserContext from "./UserContext";
const UserContextProvider = ({ children }) => {
  const [user, setUser] = React.useState(null); // Api call
  return (
    <UserContext.Provider value={{ user, setUser }}>
      // Wraping all context into a container and passing any prop we have to
      access and manage context // we through which we only need to pass val to
      one place auto taken by needy like global decleration
      {children} // what we receive call children, Through whom we call parent
    </UserContext.Provider>
  );
};
export default UserContextProvider;
