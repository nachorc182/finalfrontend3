import React, { createContext, useEffect, useMemo, useState } from "react";

export const ContextGlobal = createContext(undefined);

const ContextProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");
  const [data, setData] = useState([]);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.log(error));
  }, []);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  const addFavorite = (dentist) => {
    const newFavorites = [...favorites, dentist];
    setFavorites(newFavorites);
    localStorage.setItem("favDentists", JSON.stringify(newFavorites));
  };

  const removeFavorite = (dentist) => {
    const newFavorites = favorites.filter((fav) => fav.id !== dentist.id);
    setFavorites(newFavorites);
    localStorage.setItem("favDentists", JSON.stringify(newFavorites));
  };

  const contextValue = useMemo(() => {
    return {
      theme,
      data,
      favorites,
      toggleTheme,
      addFavorite,
      removeFavorite,
    };
  }, [theme, data, favorites]);



  return (
    <ContextGlobal.Provider value={contextValue}>
      {children}
    </ContextGlobal.Provider>
  );
};

export default ContextProvider;
