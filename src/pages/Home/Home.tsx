import React, { useEffect } from "react";
import MainTemp from "../../components/templates/MainTemp";
import { useTranslation } from "react-i18next";
import { InteractiveBtn } from "../../components/atoms/Button";
import { BrandCardCarousel } from "../../components/molecules/Carousels";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { ValueCard } from "../../components/atoms/Cards";
import Container from "react-bootstrap/Container";

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

const Home = () => {
  const { t } = useTranslation();
  useEffect(() => {
    document.title = "Home - Panda";
  }, []);

  return (
    <MainTemp>
      <>
        <div
          className="home-section-1 bg-info d-flex justify-content-center align-items-start"
          style={{
            columnGap: "160px",
            paddingTop: "5vw",
            paddingBottom: "15vw",
            paddingLeft: "10vw",
            paddingRight: "3vw",
            marginTop: "35px",
          }}
        >
          <div className="d-flex flex-column" style={{ rowGap: "70px" }}>
            <div className="" style={{ width: "265px" }}>
              <div
                className=" text-dark mb-2"
                style={{
                  fontSize: "25px",
                  fontWeight: "bold",
                  fontFamily: "Blogger Sans",
                  fontStyle: "normal",
                }}
              >
                {t("Better Than Ever...!")}
              </div>
              <div
                style={{
                  fontSize: "14px",
                  fontWeight: 100,
                  fontFamily: "Avenir",
                }}
              >
                {t(
                  "Today, we offer you a new interactive shopping experience, that meets all your needs."
                )}
              </div>
            </div>
            <div
              style={{
                fontSize: "14px",
                fontWeight: 100,
                fontFamily: "Roboto",
                fontStyle: "normal",
              }}
            >
              {t(
                "Visit us at selected branches across the Kingdom & enjoy a unique shopping experience!"
              )}
            </div>
            <div className="w-100">
              <InteractiveBtn text="LEARN MORE" url="/" />
            </div>
          </div>
          <div className="position-relative">
            <img
              src="/img/cxr-banner-2-en.png"
              alt="panda-banner"
              style={{
                objectFit: "fill",
                width: "auto",
                height: "auto",
                maxWidth: "100%",
                maxHeight: "100%",
              }}
            />
          </div>
        </div>
        <div className="home-section-2 d-flex flex-column flex-md-row justify-content-center align-items-strecth">
          <div className="position-relative fill">
            <img src="/img/about-panda.PNG" alt="panda-about-us" />
          </div>
          <div className="d-flex flex-column bg-success about-panda">
            <div
              className="mb-2"
              style={{
                fontSize: "40px",
                fontWeight: "bold",
                fontFamily: "Blogger Sans",
                fontStyle: "normal",
              }}
            >
              {t("About Panda")}
            </div>
            <div
              style={{
                fontSize: "21px",
                fontWeight: "bold",
                fontFamily: "Blogger Sans",
                fontStyle: "normal",
              }}
            >
              {t(
                "Panda from a small store in Riyadh to the largest retailer in Saudi Arabia."
              )}
            </div>
            <div
              style={{
                fontSize: "18px",
                fontWeight: 100,
                fontFamily: "Avenir",
                fontStyle: "normal",
                opacity: "90%",
              }}
            >
              {t(
                "Panda was founded in 1978 and quickly established itself as one of the leading organizations in the retail sector in the Kingdom of Saudi Arabia. In 1994, Panda merged with Azizia Company to become Azizia Panda United. Later in 1998, The Company was acquired by Savola Group, a leading retail company specializing in food products and immediately revolutionized its business model."
              )}
            </div>
            <div className="w-100 mt-4">
              <InteractiveBtn
                color="white"
                reverseColor="#70bc1f"
                text="LEARN MORE"
                url="/"
              />
            </div>
          </div>
        </div>
        <div className="home-section-3 d-flex flex-column flex-md-row justify-content-center align-items-strecth">
          <div className="d-flex flex-column our-brands">
            <div
              className="mb-2 text-success"
              style={{
                fontSize: "40px",
                fontWeight: "bold",
                fontFamily: "Blogger Sans",
                fontStyle: "normal",
              }}
            >
              {t("Our Brands")}
            </div>
            <div
              style={{
                fontSize: "16px",
                fontWeight: "lighter",
                fontFamily: "Avenir",
                fontStyle: "normal",
                opacity: "90%",
                width: "240px",
              }}
            >
              {t(
                "With a focus on higher quality, Panda introduced in 2009 a portfolio of private label products ranging from food, non-food to personal care, home care and beauty care products."
              )}
            </div>
          </div>
          <BrandCardCarousel />
        </div>
        <div className="home-section-4 d-flex flex-column flex-md-row justify-content-center align-items-strecth">
          <div className="d-flex flex-column bg-primary about-panda">
            <div
              className="mb-2"
              style={{
                fontSize: "40px",
                fontWeight: "bold",
                fontFamily: "Blogger Sans",
                fontStyle: "normal",
              }}
            >
              {t("Social Responsibility")}
            </div>
            <div
              style={{
                fontSize: "21px",
                fontWeight: "bold",
                fontFamily: "Blogger Sans",
                fontStyle: "normal",
              }}
            >
              {t("Partnering with our communities for a better life.")}
            </div>
            <div
              style={{
                fontSize: "18px",
                fontWeight: 100,
                fontFamily: "Avenir",
                fontStyle: "normal",
                opacity: "90%",
              }}
            >
              {t(
                "Panda offers a unique retail experience for individuals and families by providing the best value of fresh foods and products. We empower our customers and communities to improve their quality of life by creating value and enhancing well-being."
              )}
            </div>
            <div className="w-100 mt-4">
              <InteractiveBtn
                color="white"
                reverseColor="#014a2a"
                text="LEARN MORE"
                url="/"
              />
            </div>
          </div>
          <div className="position-relative fill">
            <img src="/img/social-resp.PNG" alt="panda-social" />
          </div>
        </div>
        <div className="home-section-4 d-flex flex-column flex-md-row justify-content-center align-items-strecth">
          <div className="position-relative fill">
            <video src="https://youtu.be/PiwKykGaHuk" />
          </div>
          <div className="d-flex flex-column bg-primary about-panda">
            <div
              className="mb-2"
              style={{
                fontSize: "40px",
                fontWeight: "bold",
                fontFamily: "Blogger Sans",
                fontStyle: "normal",
              }}
            >
              {t("Social Responsibility")}
            </div>
            <div
              style={{
                fontSize: "21px",
                fontWeight: "bold",
                fontFamily: "Blogger Sans",
                fontStyle: "normal",
              }}
            >
              {t("Partnering with our communities for a better life.")}
            </div>
            <div
              style={{
                fontSize: "18px",
                fontWeight: 100,
                fontFamily: "Avenir",
                fontStyle: "normal",
                opacity: "90%",
              }}
            >
              {t(
                "Panda offers a unique retail experience for individuals and families by providing the best value of fresh foods and products. We empower our customers and communities to improve their quality of life by creating value and enhancing well-being."
              )}
            </div>
            <div className="w-100 mt-4">
              <InteractiveBtn
                color="white"
                reverseColor="#014a2a"
                text="LEARN MORE"
                url="/"
              />
            </div>
          </div>
        </div>
        <div className="home-section-8 position-relative d-flex flex-column align-items-center row-gap-2 text-success w-100">
          <div
            className="mb-2"
            style={{
              fontSize: "40px",
              fontWeight: "bold",
              fontFamily: "Blogger Sans",
              fontStyle: "normal",
            }}
          >
            {t("Our Values")}
          </div>
          <div
            style={{
              fontSize: "16px",
              fontWeight: 100,
              fontFamily: "Avenir",
              fontStyle: "normal",
              opacity: "90%",
              color: "black",
            }}
          >
            {t(
              "Our values are who we are, where we come from and our values inspire us."
            )}
          </div>
          <div className="mt-4 mb-5">
            <InteractiveBtn
              color="#70bc1f"
              reverseColor="white"
              text="WATCH NOW"
              url="/"
            />
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

export default Home;
