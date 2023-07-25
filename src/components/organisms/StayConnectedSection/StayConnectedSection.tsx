import { ReactNode } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { HeaderIconGroup } from "../../atoms/IconWrapper";

type StayConnectedSectionProps = {
  bgColor: string;
  assetFill: boolean;
  assetComponent: ReactNode;
  title: string;
  titleColor: string;
  subTitle: string;
  subTitleColor: string;
  textColor: string;
  reverse?: boolean;
};

const StayConnectedSection = (props: StayConnectedSectionProps) => {
  const { t } = useTranslation();
  return (
    <div
      className={`infograph-section my-4 bg-${
        props.bgColor
      } multi-lingual d-flex flex-column${
        props.reverse && "-reverse"
      } flex-lg-row${
        props.reverse && "-reverse"
      } justify-content-center align-items-strecth`}
    >
      <div
        className={`asset-container ${
          props.assetFill && "fill"
        } position-relative d-flex justify-content-center align-items-center`}
      >
        {props.assetComponent}
      </div>
      <div className="d-flex flex-column justify-content-lg-end section">
        <div className={`title mb-5 text-${props.titleColor}`}>
          {t(props.title)}
        </div>
        <div
          className={`subtitle multi-lingual d-flex column-gap-5 text-${props.subTitleColor}`}
        >
          <div>
            <img src="/img/icon-pin-1.svg" alt="location-icon" />
          </div>
          <div
            style={{ fontSize: "20pt" }}
            className="d-flex flex-column row-gap-2"
          >
            {t(props.subTitle)}
            <div style={{ fontWeight: 300, fontSize: "18pt" }}>
              {t("HQ, Saudi Arabia")}
            </div>
            <div className="text multi-lingual mt-3 d-flex flex-column flex-md-row text-primary column-gap-3">
              <div style={{ fontWeight: 800, width: "180px" }}>
                {t("Customer Care Center:")}
              </div>
              <Link to="tel:920027707" style={{ fontWeight: 500 }}>
                920027707
              </Link>
            </div>
            <div className="text multi-lingual d-flex flex-column flex-md-row text-primary column-gap-3">
              <div style={{ fontWeight: 800, width: "180px" }}>P. O. Box:</div>
              <Link to="" style={{ fontWeight: 500 }}>
                33333 Jeddah 21448
              </Link>
            </div>
            <div className="text multi-lingual d-flex flex-column flex-md-row text-primary column-gap-3">
              <div style={{ fontWeight: 800, width: "180px" }}>
                {t("Email")}
              </div>
              <Link
                to="mailto:customercare@panda.com.sa"
                style={{ fontWeight: 500 }}
              >
                customercare@panda.com.sa
              </Link>
            </div>
            <HeaderIconGroup iconSize="25px" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StayConnectedSection;
