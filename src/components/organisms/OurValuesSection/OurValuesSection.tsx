import { useTranslation } from "react-i18next";
//-- Static Data --------------------------------------------------------------//
import { pandaValueCardsData } from "../../../data";
//-- Components ---------------------------------------------------------------//
import { ValueCard } from "../../atoms";
//----------------------------------------------------------------------------//
//----------------------------------------------------------------------------//

const OurValuesSection = () => {
  const { t } = useTranslation();
  return (
    <div className="our-values-section position-relative d-flex flex-column align-items-center row-gap-2 text-success w-100">
      <div className="title text-success">{t("Our Values")}</div>
      <div className="text text-black">
        {t(
          "Our values are who we are, where we come from and our values inspire us."
        )}
      </div>
      <div className="mt-4 mb-5">
        {/* <InteractiveBtn
              color="#70bc1f"
              reverseColor="white"
              text="WATCH NOW"
              url="/"
            /> */}
      </div>
      <div className="value-cards-container d-flex justify-content-center align-items-center row-gap-3 flex-wrap">
        {pandaValueCardsData.map((pandaValueCard, i) => (
          <div
            key={`panda-value-card-${i}-`}
            style={{ boxSizing: "border-box" }}
          >
            <ValueCard
              text={pandaValueCard.text}
              title={pandaValueCard.title}
              img={pandaValueCard.img}
            />
          </div>
        ))}
      </div>
      <img
        src="/img/values_top_bg.svg"
        alt=""
        className="d-none d-lg-block position-absolute top-0"
        style={{ left: 0 }}
      />
      <img
        src="/img/values_bottom_bg.svg"
        alt=""
        className="d-none d-lg-block position-absolute right-0 bottom-0"
        style={{ right: 0 }}
      />
    </div>
  );
};

export default OurValuesSection;
