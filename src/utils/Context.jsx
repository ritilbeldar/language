import React, { createContext, useContext, useState } from "react";
import { useTranslation } from "react-i18next";
import cookies from "js-cookie";

export const UserContext = createContext(null);
const languages = [
  {
    code: "en",
    name: "English",
    country_code: "gb",
  },
  {
    code: "hi",
    name: "Hindi",
    country_code: "in",
  },
  {
    code: "ch",
    name: "China",
    country_code: "cn",
  },
  {
    code: "kr",
    name: "Korean",
    country_code: "kr",
  },
  {
    code: "bn",
    name: "Bangladesh",
    country_code: "bd",
  },
];

const Context = ({ children }) => {
  const currentLanguageCode = cookies.get("i18next") || "en";
  const currentLanguage = languages.find((l) => l.code === currentLanguageCode);
  const { t } = useTranslation();


  const [users, setusers] = useState([
    { username: "Language Change", skill: "Full Stack Developer" },
]);

const [username, setusername] = useState("");
const [skill, setskill] = useState("");

const [active, setActive] = useState(null);

  return (
    <UserContext.Provider
      value={{
        languages,
        t,
        currentLanguageCode,
        users,
        setusers,
        username,
        setusername,
        skill,
        setskill,
        active,
        setActive,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default Context;
