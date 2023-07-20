import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Row, Col } from "react-bootstrap";
//-- Static Data --------------------------------------------------------------//
import { executiveTeam } from "../../data";
//-- Components ---------------------------------------------------------------//
import { TeamCard } from "../../components/atoms";
import { OurValuesSection } from "../../components/organisms";
import MainTemp from "../../components/templates/MainTemp";
//----------------------------------------------------------------------------//
//----------------------------------------------------------------------------//

const LeadershipPage = () => {
  const { t } = useTranslation();
  const [ceoImg, setCeoImg] = useState("/img/CEO-scaled.jpg");
  useEffect(() => {
    document.title = t("Leadership - Panda");
  }, []);
  useEffect(() => {
    const handleResize = () => {
      const viewportWidth = window.innerWidth;
      if (viewportWidth < 768) {
        setCeoImg("/img/Dr-Bander-Hamooh.jpg");
      } else {
        setCeoImg("/img/CEO-scaled.jpg");
      }
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [window.innerWidth]);

  return (
    <MainTemp>
      <>
        <div className="leadership-section-1 w-100">
          <div className="text-primary">{t("Leadership")}</div>
        </div>
        <div className="leadership-section-2 bg-info bg-opacity-50 multi-lingual d-flex flex-column flex-md-row justify-content-center align-items-strecth">
          <div className="position-relative fill p-5">
            <TeamCard
              name="Dr. Bander Hamooh"
              position="Chief Executive Officer"
              img={ceoImg}
            />
          </div>
          <div className="d-flex flex-column justify-content-lg-end section">
            <div className="title text-success">
              {t("Panda Leadership Team")}
            </div>
            {/* <div className="subtitle">
              {t(
                "Panda from a small store in Riyadh to the largest retailer in Saudi Arabia."
              )}
            </div> */}
            <div className="text-dark">
              {t(
                "Our executive team of experienced retail experts is backed by a strongly motivated, diverse group of managers and staff dedicated to creating a competitive customer value proposition. Our highly seasoned and talented senior management team, with an average of nearly 30 years of retail industry experience, provides strong leadership to focus on our company’s overall growth and community partnership goals."
              )}
            </div>
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
        <div className="pt-5 position-relative d-flex flex-column justify-content-center align-items-center row-gap-2 w-100">
          <div
            className="title text-success text-center my-5"
            style={{ fontSize: "36pt", fontWeight: 600 }}
          >
            {t("Executive Team")}
          </div>
          <div className="p-5">
            <Row className="w-100 row-gap-5 mx-auto">
              {executiveTeam.map((member, i) => (
                <Col
                  key={`team-value-card-${i}-${member.name}`}
                  style={{ boxSizing: "border-box" }}
                  xs={12}
                  md={6}
                  lg={3}
                >
                  <TeamCard
                    name={member.name}
                    position={member.position}
                    img={member.img}
                  />
                </Col>
              ))}
            </Row>
          </div>
        </div>
        <div className="home-section-7 multi-lingual d-flex flex-column-reverse flex-md-row justify-content-center align-items-strecth">
          <div className="position-relative youtube-wrapper">
            <img
              src="/img/our-vision-leadership.jpg"
              alt="Our Vision"
              className=" object-fit-cover"
            />
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
        <OurValuesSection />
      </>
    </MainTemp>
  );
};

export default LeadershipPage;
