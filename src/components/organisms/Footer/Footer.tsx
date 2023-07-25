import React from "react";
import { useTranslation } from "react-i18next";
import { LogoWrapper } from "../../atoms";
import FooterLinksCol from "./FooterLinksCol";
import Dropdown from "react-bootstrap/Dropdown";
import { useLocation, useNavigate } from "react-router-dom";

const Footer = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();
  //-----------------------------------------------------------------//
  const [pandaLang, setPandaLang] = React.useState(
    document.getElementsByTagName("html")[0].getAttribute("lang")
  );
  //-----------------------------------------------------------------//
  const handleLangSwitcher = (e: any, lang: string) => {
    e.preventDefault();
    setPandaLang(lang);
    // sessionStorage.setItem("panda_lang", lang);
    const langDetector = location.pathname.split("/")[1];
    if (langDetector === "en" || langDetector === "ar")
      navigate(`/${lang}${location.pathname.slice(3)}`);
    else navigate(`/${lang}${location.pathname}`);
  };
  //-----------------------------------------------------------------//
  React.useEffect(() => {
    const langDetector = location.pathname.split("/")[1]; // "en" || "ar"
    if (langDetector) {
      setPandaLang(langDetector);
    } else {
      setPandaLang("en");
      // sessionStorage.setItem("panda_lang", "en");
    }
  }, [location]);
  //-----------------------------------------------------------------//
  return (
    <div className="multi-lingual">
      <div className="footer border-success">
        <div className="footer-logo ">
          <LogoWrapper width="10vw" />
        </div>{" "}
        <div className="d-flex flex-column flex-lg-row footer-links-container justify-content-between my-4">
          <FooterLinksCol
            title={t("QUICK LINKS")}
            links={[
              { text: t("About"), url: `/${pandaLang}/about` },
              { text: t("Leadership"), url: `/${pandaLang}/leadership` },
              // { text: t("Social Responsibility"), url: "" },
              // { text: t("Careers"), url: "" },
              { text: t("Contact"), url: `/${pandaLang}/contact` },
              {
                text: t("Speak Up"),
                url: "https://secure.ethicspoint.eu/domain/media/en/gui/106373/index.html",
              },
            ]}
          />

          <FooterLinksCol
            title={t("ABOUT THIS WEBSITE")}
            links={[
              // { text: t("Our History"), url: "" },
              { text: t("Leadership"), url: `/${pandaLang}/leadership` },
              {
                text: t("Certificates and Awards"),
                url: `/${pandaLang}/certificates-and-awards`,
              },
              { text: t("Savola Corporate"), url: "https://www.savola.com/" },
            ]}
          />
          <FooterLinksCol
            title={t("FOLLOW US ON SOCIAL")}
            links={[
              {
                text: t("Facebook"),
                url: "https://www.facebook.com/PandaSaudi",
              },
              {
                text: t("Instagram"),
                url: "https://www.instagram.com/pandasaudi",
              },
              {
                text: t("YouTube"),
                url: "https://www.youtube.com/channel/UCoq-QkHplVvXm4i4DxPuCHw",
              },
              { text: t("Twitter"), url: "https://twitter.com/PandaSaudi" },
              {
                text: t("LinkedIn"),
                url: "https://www.linkedin.com/company/azizia-panda-united-savola-group/",
              },
              { text: t("WhatsApp"), url: "https://wa.me/+966920027707" },
            ]}
          />
          <FooterLinksCol
            title={t("SHOP WITH US")}
            links={[{ text: t("Panda App"), url: "https://go.panda.sa/app" }]}
          />
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              {pandaLang === "en" ? "English" : "العربية"}
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
        </div>
      </div>
      <div className="py-3 d-flex justify-content-center align-items-center bg-primary text-white">
        {pandaLang === "en"
          ? "Copyright © 2021 Panda. All rights reserved."
          : "جميع حقوق النشر محفوظة بنده © ۲۰۲۱"}
      </div>
    </div>
  );
};

export default Footer;
