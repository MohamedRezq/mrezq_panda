import { useTranslation } from "react-i18next";
import { InteractiveBtn } from "../../atoms/Button";

const TimelineSection = () => {
  const { t } = useTranslation();
  return (
    <div
      className="infograph-section timeline-section multi-lingual d-flex flex-column-reverse flex-lg-row justify-content-center align-items-center"
      style={{ backgroundColor: "#FFF9EC" }}
    >
      <div className="d-flex column-gap-5 section">
        <div>
          <img src="/img/d-timeline.svg" alt="Timeline" />
        </div>
        <div className="timeline-sheet d-flex row-gap-5 flex-column">
          <div className="timeline-sheet-number">100+</div>
          <div className="timeline-sheet-text">{t("Million transactions")}</div>
          <div className="text-dark">
            {t(
              "Achieved over 100+ million transactions through Panda chain of Hypermarkets and Supermarkets."
            )}
          </div>
        </div>
      </div>
      <div className="d-flex flex-column bg-inherit section">
        <div
          className="mb-2 text-success"
          style={{
            fontSize: "40px",
            fontWeight: "bold",
            fontFamily: "Blogger Sans",
            fontStyle: "normal",
            lineHeight: "30pt",
          }}
        >
          {t("Our history of steady growth")}
        </div>
        {/* <div className="w-100 mt-4">
          <InteractiveBtn
            color="#70bc1f"
            reverseColor="#eee"
            text="Explore"
            url="/our-history"
          />
        </div> */}
      </div>
    </div>
  );
};

export default TimelineSection;
