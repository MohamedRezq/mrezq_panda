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
        className=" bg-info d-flex justify-content-center align-items-start mx-5 mt-3 mb-5 py-5"
        style={{ columnGap: "160px" }}
      >
        <div className="d-flex flex-column " style={{ rowGap: "70px" }}>
          <div className="">
            <div className=" text-dark mb-2">{t("Better Than Ever...!")}</div>
            <div>
              {t(
                "Today, we offer you a new interactive shopping experience, that meets all your needs."
              )}
            </div>
          </div>
          <div>
            {t(
              "Visit us at selected branches across the Kingdom & enjoy a unique shopping experience!"
            )}
          </div>
          <div>
            <InteractiveBtn text="LEARN MORE" url="/" />
          </div>
        </div>
      </div>
    </MainTemp>
  );
};

export default Home;
