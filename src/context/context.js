import { useState, createContext } from "react";

export const AppContext = createContext();
const AppContextProvider = (props) => {
  // displayData will be shown on dashboard
  const [displayData, setDisplayData] = useState([]);

  return (
    <AppContext.Provider
      value={{
        displayData: [displayData, setDisplayData],
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
