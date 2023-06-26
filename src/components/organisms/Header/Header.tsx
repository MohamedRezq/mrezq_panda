import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
//
import Drawer from "react-modern-drawer";
import { HiMenu } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { LogoWrapper } from "../../atoms";
import { HeaderIconGroup } from "../../atoms/IconWrapper";
import { OverlayBtn } from "../../molecules/Overlay";
import FooterLinksCol from "../Footer/FooterLinksCol";
import { useTranslation } from "react-i18next";
import MobileMenu from "./MobileMenu";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { t } = useTranslation();
  //-----> Mobile Drawer <-------------------------------------------//
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };
  //-----------------------------------------------------------------//
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
    <>
      <header className="large-screen-header d-none d-lg-block">
        <div className="header d-flex multi-lingual justify-content-between align-items-center">
          <LogoWrapper width="11vw" />
          <div className="d-flex multi-lingual justify-content-center align-items-center gap-4">
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
            <HeaderIconGroup iconSize="25px" />
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
            btnText={t("SHOP WITH US")}
            btnLink="https://panda.com.sa/en/"
            elem1={
              <FooterLinksCol
                title={t("Shop with us")}
                links={[
                  { text: t("Panda click"), url: "https://panda.com.sa/en/" },
                ]}
              />
            }
            elem2={<img src="/img/menu-shop-with-us1.jpg" />}
            isOverLay={true}
          />
          <OverlayBtn
            btnText={t("BECOME A SUPPLIER")}
            btnLink="https://panda.com.sa/supplier/"
            elem1={<></>}
            elem2={<></>}
            isOverLay={true}
          />
          <OverlayBtn
            btnText={t("PANDA PLUS")}
            btnLink="https://plus.panda.sa/en/"
            elem1={<></>}
            elem2={<></>}
            isOverLay={false}
          />
        </div>
      </header>
      <header className="mobile-screen-header d-lg-none">
        <div className="header d-flex mobile-rtl justify-content-between align-items-center">
          <LogoWrapper width="11vw" />
          <div className="d-flex mobile-rtl justify-content-center align-items-center gap-4">
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
            <div onClick={toggleDrawer}>
              <HiMenu color="#70bc1f" size={25} style={{ cursor: "pointer" }} />
            </div>
            {/* <HeaderIconGroup /> */}
          </div>
        </div>

        <Drawer
          open={isOpen}
          onClose={toggleDrawer}
          direction={pandaLang === "en" ? "right" : "left"}
          className="mobile-drawer"
          size="100%"
          // enableOverlay={false}
        >
          <div className="h-100">
            <div className="header d-flex justify-content-between align-items-center">
              <LogoWrapper width="11vw" />
              <div className="d-flex mobile-rtl justify-content-center align-items-center gap-4">
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
                <div onClick={toggleDrawer}>
                  <IoClose
                    color="#70bc1f"
                    size={25}
                    style={{ cursor: "pointer" }}
                  />
                </div>
                {/* <HeaderIconGroup /> */}
              </div>
            </div>
            <div className="d-flex flex-column justify-content-between align-items-center pb-4">
              <MobileMenu dir={pandaLang || ""} />
              <div className="pr-2">
                <HeaderIconGroup iconSize="20px" />
              </div>
            </div>
          </div>
        </Drawer>
      </header>
    </>
  );
};

export default Header;
