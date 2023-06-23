import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
//
import { LogoWrapper } from "../../atoms";
import { HeaderIconGroup } from "../../atoms/IconWrapper";

const Header = () => {
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
    <div className="header d-flex justify-content-between align-items-center">
      <LogoWrapper width="10vw" />
      <div className="d-flex justify-content-center align-items-center gap-4">
        <div className="d-flex gap-3 align-items-center langSwitcher">
          <div
            onClick={(e) => handleLangSwitcher(e, "en")}
            className={`${pandaLang === "en" && "active"}`}
          >
            العربية
          </div>
          <div
            onClick={(e) => handleLangSwitcher(e, "ar")}
            className={`${pandaLang === "ar" && "active"}`}
          >
            English
          </div>
        </div>
        <HeaderIconGroup />
      </div>
    </div>
  );
};

export default Header;
