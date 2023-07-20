import React from "react";
import { useTranslation } from "react-i18next";

type GradientBannerSectionProps = {
  largeBanner: string;
  mobileBanner: string;
  title: string;
  textColor: string;
};

const GradientBannerSection = (props: GradientBannerSectionProps) => {
  const { t } = useTranslation();
  return (
    <>
      <div
        className="gradient-section-banner-lg w-100"
        style={{ backgroundImage: `url(${props.largeBanner})` }}
      >
        <div className={`text-${props.textColor}`}>{t(props.title)}</div>
      </div>
      <div
        className="gradient-section-banner-sm w-100"
        style={{ backgroundImage: `url(${props.mobileBanner})` }}
      >
        <div className={`text-${props.textColor}`}>{t(props.title)}</div>
      </div>
    </>
  );
};

export default GradientBannerSection;
