import React, { useState } from "react";
import useLocalStorage from "use-local-storage";

const AppContext = React.createContext();

const AppProvider = (props) => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [selectNat, setSelectNat] = useState([]);
  const [page, setPage] = useState(1);

  //Use Local storage to save favorites Users so when refresh the page it still be there
  const [favorites, setFavorites] = useLocalStorage("favorites", []);
  return (
    <AppContext.Provider
      value={{
        users,
        setUsers,
        isLoading,
        setIsLoading,
        page,
        setPage,
        setFavorites,
        favorites,
        selectNat,
        setSelectNat,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppContext;
export { AppProvider };
