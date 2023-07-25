import React from "react";
import { useTranslation } from "react-i18next";
import { LogoWrapper } from "../../atoms";
import FooterLinksCol from "./FooterLinksCol";
import FooterLangSelector from "./FooterLangSelector";
import { useLocation } from "react-router-dom";

const Footer = () => {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const [pandaLang, setPandaLang] = React.useState(
    location.pathname.split("/")[1]
  );
  React.useEffect(() => {
    setPandaLang(location.pathname.split("/")[1]);
  }, []);

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
          {/* <FooterLinksCol
            title={t("FOLLOW US ON SOCIAL")}
            links={[
              { text: t("Facebook"), url: "" },
              { text: t("Instagram"), url: "" },
              { text: t("YouTube"), url: "" },
              { text: t("Twitter"), url: "" },
              { text: t("LinkedIn"), url: "" },
            ]}
          /> */}
          <FooterLinksCol
            title={t("SHOP WITH US")}
            links={[{ text: t("Panda App"), url: "https://go.panda.sa/app" }]}
          />
          <FooterLangSelector />
        </div>
      </div>
      <div className="py-3 d-flex justify-content-center align-items-center bg-primary text-white">
        {location.pathname.split("/")[1] === "en"
          ? "Copyright © 2021 Panda. All rights reserved."
          : "جميع حقوق النشر محفوظة باندا © 2021"}
      </div>
    </div>
  );
};

export default Footer;
