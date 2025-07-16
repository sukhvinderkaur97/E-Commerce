import { useState, useEffect, useContext, createContext } from "react";
import axios from "axios";

const AuthContext = createContext();


const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    user: null,
    token: "",
  });

  useEffect(() => {
    const data = localStorage.getItem("auth");
    if (data) {
      const parseData = JSON.parse(data);
      console.log("Auth restored from localStorage:", parseData); // 👈 ADD THIS
      setAuth({
        user: parseData.user,
        token: parseData.token,
      });

      axios.defaults.headers.common["Authorization"] = `Bearer ${parseData.token}`;
    }
  }, []);


  return (
    <AuthContext.Provider value={[auth, setAuth]}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook
const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider };
