import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import Dropdown from "react-bootstrap/Dropdown";

const FooterLangSelector = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [pandaLang, setPandaLang] = useState(
    document.getElementsByTagName("html")[0].getAttribute("lang")
  );
  const handleLangSwitcher = (e: any, lang: string) => {
    e.preventDefault();
    setPandaLang(lang);
    localStorage.setItem("panda_lang", lang);
    const langDetector = location.pathname.split("/")[1];
    if (langDetector === "en" || langDetector === "ar")
      navigate(`/${pandaLang}${location.pathname.slice(3)}`);
    else navigate(`/${pandaLang}${location.pathname}`);
  };
  useEffect(() => {
    const lang = localStorage.getItem("panda_lang");
    if (lang) {
      setPandaLang(lang);
    } else {
      setPandaLang("en");
      localStorage.setItem("panda_lang", "en");
    }
  }, []);
  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        {pandaLang === "ar" ? "English" : "العربية"}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item onClick={(e) => handleLangSwitcher(e, "en")}>
          العربية
        </Dropdown.Item>
        <Dropdown.Item onClick={(e) => handleLangSwitcher(e, "ar")}>
          English
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default FooterLangSelector;
