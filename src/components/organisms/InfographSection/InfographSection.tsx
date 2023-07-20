import React, { ReactNode } from "react";
import { useTranslation } from "react-i18next";
import { text } from "stream/consumers";

type InfographSectionProps = {
  bgColor: string;
  assetFill: boolean;
  assetComponent: ReactNode;
  title: string;
  titleColor: string;
  subTitle: string;
  subTitleColor: string;
  text: string[];
  textColor: string;
};

const InfographSection = (props: InfographSectionProps) => {
  const { t } = useTranslation();
  return (
    <div
      className={`infograph-section bg-${props.bgColor} multi-lingual d-flex flex-column flex-lg-row justify-content-center align-items-strecth`}
    >
      <div
        className={`asset-container ${
          props.assetFill && "fill"
        } position-relative d-flex justify-content-center align-items-center`}
      >
        {props.assetComponent}
      </div>
      <div className="d-flex flex-column justify-content-lg-end section">
        <div className={`title text-${props.titleColor}`}>{t(props.title)}</div>
        <div className={`subtitle text-${props.subTitleColor}`}>
          {t(props.subTitle)}
        </div>
        {props.text.map((text, i) => (
          <div
            key={`${props.title}-${text.slice(0, 10)}`}
            className={`text text-${props.textColor}`}
          >
            {t(text)}
          </div>
        ))}
        <div className="w-100 mt-4">
          {/* <InteractiveBtn
                color="white"
                reverseColor="#70bc1f"
                text="LEARN MORE"
                url="/"
              /> */}
        </div>
      </div>
    </div>
  );
};

export default InfographSection;
