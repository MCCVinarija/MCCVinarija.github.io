import React, { createContext, useState } from "react";

export const LanguageContext = createContext({
  language: "sr",
  toggleLanguage: () => {},
});

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("sr");

  const toggleLanguage = () => {
    setLanguage((current) => (current === "sr" ? "en" : "sr"));
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
