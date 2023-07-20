import React, { ReactNode } from "react";
import { useTranslation } from "react-i18next";

type OurVisionOurMissionSectionProps = {
  assetComponent: ReactNode;
};

const OurVisionOurMissionSection = (props: OurVisionOurMissionSectionProps) => {
  const { t } = useTranslation();
  return (
    <div className="our-vision-our-mission-section multi-lingual d-flex flex-column-reverse flex-lg-row justify-content-center align-items-strecth">
      <div className="position-relative asset-wrapper">
        {props.assetComponent}
      </div>
      <div className="d-flex flex-column bg-secondary text-white section">
        <div
          className="mb-2"
          style={{
            fontSize: "40px",
            fontWeight: "bold",
            fontFamily: "Blogger Sans",
            fontStyle: "normal",
          }}
        >
          {t("Our Vision")}
        </div>
        <div
          style={{
            fontSize: "16px",
            fontWeight: "light",
            fontFamily: "Avenir",
            fontStyle: "normal",
          }}
        >
          {t(
            "To be the sustainable leading retailer, innovating to delight the communities we serve every day."
          )}
        </div>
        <div
          className="mb-2 mt-5"
          style={{
            fontSize: "40px",
            fontWeight: "bold",
            fontFamily: "Blogger Sans",
            fontStyle: "normal",
          }}
        >
          {t("Our Mission")}
        </div>
        <div
          style={{
            fontSize: "16px",
            fontWeight: "light",
            fontFamily: "Avenir",
            fontStyle: "normal",
          }}
        >
          {t(
            "To empower our colleagues, customers, and communities to improve their quality of life by creating value and enhancing well-being."
          )}
        </div>
      </div>
    </div>
  );
};

export default OurVisionOurMissionSection;
