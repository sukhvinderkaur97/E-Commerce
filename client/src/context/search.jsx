import { useState, useContext, createContext } from "react";


const SearchContext = createContext();
const SearchProvider = ({ children }) => {
  const [auth, setAuth] = useState({
   keywords: "",
   results: [],
  });


  return (
    <SearchContext.Provider value={[auth, setAuth]}>
      {children}
    </SearchContext.Provider>
  );
};

// Custom hook
const useSearch = () => useContext(SearchContext); // This hook allows components to access the search context easily

export { useSearch, SearchProvider };
