import React, { useEffect } from "react";
import MainTemp from "../../components/templates/MainTemp";
import { useTranslation } from "react-i18next";
import { InteractiveBtn } from "../../components/atoms/Button";

const Home = () => {
  const { t } = useTranslation();
  useEffect(() => {
    document.title = "Home - Panda";
  }, []);

  return (
    <MainTemp>
      <div
        className="home-section-1 bg-info d-flex justify-content-center align-items-start"
        style={{
          columnGap: "160px",
          paddingTop: "5vw",
          paddingBottom: "15vw",
          paddingLeft: "10vw",
          paddingRight: "3vw",
          marginTop: "35px",
        }}
      >
        <div className="d-flex flex-column" style={{ rowGap: "70px" }}>
          <div className="" style={{ width: "265px" }}>
            <div
              className=" text-dark mb-2"
              style={{
                fontSize: "25px",
                fontWeight: "bold",
                fontFamily: "Blogger Sans",
                fontStyle: "normal",
              }}
            >
              {t("Better Than Ever...!")}
            </div>
            <div
              style={{
                fontSize: "14px",
                fontWeight: 100,
                fontFamily: "Avenir",
              }}
            >
              {t(
                "Today, we offer you a new interactive shopping experience, that meets all your needs."
              )}
            </div>
          </div>
          <div
            style={{
              fontSize: "14px",
              fontWeight: 100,
              fontFamily: "Roboto",
              fontStyle: "normal",
            }}
          >
            {t(
              "Visit us at selected branches across the Kingdom & enjoy a unique shopping experience!"
            )}
          </div>
          <div className="w-100">
            <InteractiveBtn text="LEARN MORE" url="/" />
          </div>
        </div>
        <div className="position-relative">
          <img
            src="/img/cxr-banner-2-en.png"
            alt="panda-banner"
            style={{
              objectFit: "fill",
              width: "auto",
              height: "auto",
              maxWidth: "100%",
              maxHeight: "100%",
            }}
          />
        </div>
      </div>
    </MainTemp>
  );
};

export default Home;
