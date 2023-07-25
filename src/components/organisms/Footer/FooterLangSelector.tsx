import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import Dropdown from "react-bootstrap/Dropdown";

const FooterLangSelector = () => {
  const navigate = useNavigate();
  const location = useLocation();
  //-----------------------------------------------------------------//
  const handleLangSwitcher = (e: any, lang: string) => {
    e.preventDefault();
    sessionStorage.setItem("panda_lang", lang);
    const langDetector = location.pathname.split("/")[1];
    if (langDetector === "en" || langDetector === "ar")
      navigate(`/${lang}${location.pathname.slice(3)}`);
    else navigate(`/${lang}${location.pathname}`);
  };
  useEffect(() => {
    const lang = sessionStorage.getItem("panda_lang");
    if (!lang) {
      sessionStorage.setItem("panda_lang", "en");
    }
  }, []);
  //-----------------------------------------------------------------//
  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        {location.pathname.split("/")[1] === "en" ? "English" : "العربية"}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item onClick={(e) => handleLangSwitcher(e, "ar")}>
          العربية
        </Dropdown.Item>
        <Dropdown.Item onClick={(e) => handleLangSwitcher(e, "en")}>
          English
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default FooterLangSelector;
