import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import MainTemp from "../../components/templates/MainTemp";
import { TeamCard, ValueCard } from "../../components/atoms";
import { Row, Col } from "react-bootstrap";
//-- Components ---------------------------------------------------------------//

//----------------------------------------------------------------------------//
//----------------------------------------------------------------------------//

const pandaValueCardsData = [
  {
    title: "Ownership",
    text: "We believe ownership with passion are the fuel of excellence",
    img: "/img/ownership.svg",
  },
  {
    title: "Customer Excellence",
    text: "We believe that a happy customer is the best way to succeed",
    img: "/img/customer-experience.svg",
  },
  {
    title: "Teamwork",
    text: "We believe that everyone contributes to the worth of others",
    img: "/img/teamwork.svg",
  },
  {
    title: "Integrity",
    text: "We believe in succeeding with integrity",
    img: "/img/integrity.svg",
  },
  {
    title: "Agility",
    text: "We believe in agility to drive change",
    img: "/img/agility.svg",
  },
];

const executiveTeam = [
  {
    name: "Abdullah Al Sabban",
    position: "Chief Operations Officer",
    img: "/img/Panda-Exec7079-Edit-scaled.jpg",
  },
  {
    name: "Eric Deliers",
    position: "Chief Commercial Officer",
    img: "/img/Panda-Exec7020-Edit-scaled.jpg",
  },
  {
    name: "Ryyan Tarabzoni",
    position: "Chief Supply Chain Officer & CEO Advisor",
    img: "/img/Panda-Exec7504-Edit-scaled.jpg",
  },
  {
    name: "Ahmed Chehade",
    position: "Chief Marketing Officer",
    img: "/img/Panda-Exec7118-Edit-scaled.jpg",
  },
  {
    name: "Fouad Reda",
    position: "Chief Business Support Officer",
    img: "/img/Fouad-Reda-scaled.jpg",
  },
  {
    name: "Mohammed Khorshid",
    position: "Chief Financial Officer",
    img: "/img/Panda-Exec7594-Edit-scaled.jpg",
  },
  {
    name: "Piyush Chowhan",
    position: "Chief Digital Officer",
    img: "/img/Panda-Exec7613-Edit-scaled.jpg",
  },
  {
    name: "Wassim Al Tahawi",
    position: "Chief Governance, Risk, and Compliance Officer",
    img: "/img/Panda-Exec7246-Edit-scaled.jpg",
  },
  {
    name: "Majid Basha",
    position: "Chief of Staff",
    img: "/img/Panda-Exec7332-Edit-scaled.jpg",
  },
  {
    name: "Hicham Aouda",
    position: "CEO Advisor for Business Development",
    img: "/img/MicrosoftTeams-image-1-1-scaled.jpg",
  },
  {
    name: "Bandar Al Saidi",
    position: "Vice President for Commercial Food",
    img: "/img/Bandar-alsaedi-Picture-scaled.jpg",
  },
  {
    name: "Hisham BaEissa",
    position: "Director of Board Governance & Secretary",
    img: "/img/Panda-Exec7383-Edit-scaled.jpg",
  },
];
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
        <div className="home-section-8 position-relative d-flex flex-column align-items-center row-gap-2 text-success w-100">
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
      </>
    </MainTemp>
  );
};

export default LeadershipPage;
