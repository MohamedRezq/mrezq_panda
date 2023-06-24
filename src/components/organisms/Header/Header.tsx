import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
//
import { LogoWrapper } from "../../atoms";
import { HeaderIconGroup } from "../../atoms/IconWrapper";
import { OverlayBtn } from "../../molecules/Overlay";
import FooterLinksCol from "../Footer/FooterLinksCol";
import { useTranslation } from "react-i18next";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { t } = useTranslation();
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
    <div className="d-none d-lg-block">
      <div className="header d-flex justify-content-between align-items-center">
        <LogoWrapper width="11vw" />
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
      <div
        className="navLinks bg-success mt-2 d-flex justify-content-center align-items-center"
        style={{ columnGap: "30px" }}
      >
        {/* <OverlayBtn
          btnText="ABOUT PANDA"
          btnLink="/about"
          elem1={
            <FooterLinksCol
              title={t("QUICK LINKS")}
              links={[
                { text: t("Our History"), url: "" },
                { text: t("Leadership"), url: "" },
                { text: t("Certificates and Awards"), url: "" },
                { text: t("Savola Corporate"), url: "" },
              ]}
            />
          }
          elem2={<></>}
          isOverLay={true}
        />
        <OverlayBtn
          btnText="SOCIAL RESPONSIBILITY"
          btnLink="/partnership-with-communities"
          elem1={<></>}
          elem2={<></>}
          isOverLay={false}
        />
        <OverlayBtn
          btnText="CAREERS"
          btnLink="/careers"
          elem1={
            <FooterLinksCol
              title={t("Careers")}
              links={[{ text: t("Vacancies"), url: "" }]}
            />
          }
          elem2={<img src="/img/menu-social-responsibility1.jpg" />}
          isOverLay={true}
        />
        <OverlayBtn
          btnText="CONTACT"
          btnLink="/contact"
          elem1={<></>}
          elem2={<></>}
          isOverLay={false}
        /> */}
        <OverlayBtn
          btnText="SHOP WITH US"
          btnLink="https://panda.com.sa/en/"
          elem1={
            <FooterLinksCol
              title={t("Shop with us")}
              links={[{ text: t("Panda click"), url: "" }]}
            />
          }
          elem2={<img src="/img/menu-shop-with-us1.jpg" />}
          isOverLay={true}
        />
        <OverlayBtn
          btnText="BECOME A SUPPLIER"
          btnLink="https://panda.com.sa/supplier/"
          elem1={<></>}
          elem2={<></>}
          isOverLay={true}
        />
        <OverlayBtn
          btnText="PANDA PLUS"
          btnLink="https://plus.panda.sa/en/"
          elem1={<></>}
          elem2={<></>}
          isOverLay={false}
        />
      </div>
    </div>
  );
};

export default Header;
