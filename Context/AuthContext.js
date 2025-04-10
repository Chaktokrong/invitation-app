import React, { createContext, useState } from "react";

// create context
const AuthContext = createContext();

// context provider
const AuthProvider = ({ children }) => {
  // ==================== change language =============================
  const [language, setLanguage] = useState("kh");
  const changeLanguage = (lang) => {
    setLanguage(lang);
  };

  //============================ return ===============================
  const value = {
    changeLanguage,
    language,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

// export
export { AuthContext, AuthProvider };
