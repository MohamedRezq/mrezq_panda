import { useTranslation } from "react-i18next";
//-- Static Data --------------------------------------------------------------//
import { awards } from "../../../data";
import { Accordion } from "react-bootstrap";
//-- Components ---------------------------------------------------------------//

//----------------------------------------------------------------------------//
//----------------------------------------------------------------------------//
const OurAwardsSection = () => {
  const { t } = useTranslation();
  return (
    <div className="our-awards-section w-100">
      <div className="title text-center text-primary">{t("Our Awards")}</div>
      <div className="our-awards-years multi-lingual d-block d-lg-none">
        <Accordion defaultActiveKey="0">
          {awards.map((awardsByYear, i) => (
            <Accordion.Item
              eventKey={String(i)}
              key={`award-${i}-${awardsByYear.year}`}
            >
              <Accordion.Header className="award-year w-100 text-primary">
                {t(awardsByYear.year)}
              </Accordion.Header>
              <Accordion.Body className="year-awards multi-lingual d-flex flex-column row-gap-4">
                {awardsByYear.yearAwards.map((award) => (
                  <div className="year-awards multi-lingual d-flex align-items-start column-gap-5">
                    <div className="award-icon">
                      <img src="/img/award.svg" alt="award" />
                    </div>
                    <div className="award mt-1">
                      {award.awardText.map((text, i) =>
                        text.quoted ? (
                          <span
                            key={`quoted-text-${text.text}`}
                            className="quoted-text text-success"
                          >
                            {t(text.text)}{" "}
                          </span>
                        ) : (
                          <span key={`unquoted-text-${text.text}`}>
                            {t(text.text)}{" "}
                          </span>
                        )
                      )}
                    </div>
                  </div>
                ))}
              </Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>
      </div>
      <div className="our-awards-years d-none d-lg-flex flex-column row-gap-5">
        {awards.map((awardsByYear, i) => (
          <div
            key={`award-${i}-${awardsByYear.year}`}
            className="d-none multi-lingual d-lg-flex column-gap-5"
          >
            <div className="award-year text-primary">{awardsByYear.year}</div>
            <div className="year-awards d-flex flex-column row-gap-4">
              {awardsByYear.yearAwards.map((award, i) => (
                <div
                  key={`award-by-year-${award.awardText[0].text}`}
                  className="year-awards multi-lingual d-flex align-items-start column-gap-5"
                >
                  <div className="award-icon">
                    <img src="/img/award.svg" alt="award" />
                  </div>
                  <div className="award mt-1">
                    {award.awardText.map((text, i) =>
                      text.quoted ? (
                        <span
                          key={`quoted-text-${text.text}`}
                          className="quoted-text text-success"
                        >
                          {t(text.text)}{" "}
                        </span>
                      ) : (
                        <span key={`unquoted-text-${text.text}`}>
                          {t(text.text)}{" "}
                        </span>
                      )
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurAwardsSection;
