import React from "react";
import { useTranslation } from "react-i18next";
import { LogoWrapper } from "../../atoms";
import FooterLinksCol from "./FooterLinksCol";
import FooterLangSelector from "./FooterLangSelector";

const Footer = () => {
  const { t, i18n } = useTranslation();
  const [pandaLang, setPandaLang] = React.useState(
    document.getElementsByTagName("html")[0].getAttribute("lang")
  );
  React.useEffect(() => {
    setPandaLang(document.getElementsByTagName("html")[0].getAttribute("lang"));
  }, []);

  return (
    <div className="multi-lingual">
      <div className="footer border-success">
        <div className="footer-logo ">
          <LogoWrapper width="10vw" />
        </div>{" "}
        <div className="d-flex flex-column flex-lg-row footer-links-container justify-content-between my-4">
          {/* <FooterLinksCol
            title={t("QUICK LINKS")}
            links={[
              { text: t("About"), url: "" },
              { text: t("Leadership"), url: "" },
              { text: t("Social Responsibility"), url: "" },
              { text: t("Careers"), url: "" },
              { text: t("Contact"), url: "" },
              { text: t("Speak Up"), url: "" },
            ]}
          />
          <FooterLinksCol
            title={t("ABOUT THIS WEBSITE")}
            links={[
              { text: t("Our History"), url: "" },
              { text: t("Leadership"), url: "" },
              { text: t("Certificates and Awards"), url: "" },
              { text: t("Savola Corporate"), url: "" },
            ]}
          /> */}
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
            links={[
              { text: t("Panda Click"), url: "https://panda.com.sa/en/" },
            ]}
          />
          <FooterLangSelector />
        </div>
      </div>
      <div className="py-3 d-flex justify-content-center align-items-center bg-primary text-white">
        {pandaLang === "en"
          ? "Copyright © 2021 Panda. All rights reserved."
          : "جميع حقوق النشر محفوظة باندا © 2021"}
      </div>
    </div>
  );
};

export default Footer;
