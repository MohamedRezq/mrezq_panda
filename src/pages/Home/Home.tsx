import { useEffect } from "react";
import { useTranslation } from "react-i18next";
//-- Components ---------------------------------------------------------------//
import MainTemp from "../../components/templates/MainTemp";
// import { InteractiveBtn } from "../../components/atoms/Button";
import { BrandCardCarousel } from "../../components/molecules/Carousels";
import { YoutubePlayer } from "../../components/atoms/Players";
import {
  CareerContactSection,
  OurValuesSection,
  TimelineSection,
} from "../../components/organisms";
//----------------------------------------------------------------------------//
//----------------------------------------------------------------------------//

const Home = () => {
  const { t } = useTranslation();
  useEffect(() => {
    document.title = "Home - Panda";
  }, []);

  return (
    <MainTemp>
      <>
        <div className="home-section-1 multi-lingual bg-info d-flex flex-column-reverse flex-lg-row justify-content-center align-items-center">
          <div className="d-flex flex-column section">
            <div className="">
              <div className="title text-dark mb-2">
                {t("Better Than Ever...!")}
              </div>
              <div className="text text-dark">
                {t(
                  "Today, we offer you a new interactive shopping experience, that meets all your needs."
                )}
              </div>
            </div>
            <div className="text text-dark">
              {t(
                "Visit us at selected branches across the Kingdom & enjoy a unique shopping experience!"
              )}
            </div>
            <div className="w-100">
              {/* <InteractiveBtn
                color="#70bc1f"
                reverseColor="white"
                text="LEARN MORE"
                url="/"
              /> */}
            </div>
          </div>
          <div className="position-relative p-lg-5">
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
        <div className="home-section-2 multi-lingual d-flex flex-column flex-md-row justify-content-center align-items-strecth">
          <div className="position-relative fill">
            <img src="/img/about-panda.PNG" alt="panda-about-us" />
          </div>
          <div className="d-flex flex-column bg-success section">
            <div className="title">{t("About Panda")}</div>
            <div className="subtitle">
              {t(
                "Panda from a small store in Riyadh to the largest retailer in Saudi Arabia."
              )}
            </div>
            <div className="text">
              {t(
                "Panda was founded in 1978 and quickly established itself as one of the leading organizations in the retail sector in the Kingdom of Saudi Arabia. In 1994, Panda merged with Azizia Company to become Azizia Panda United. Later in 1998, The Company was acquired by Savola Group, a leading retail company specializing in food products and immediately revolutionized its business model."
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
        <div className="home-section-3 p-lg-3 multi-lingual d-flex flex-column flex-md-row justify-content-center align-items-strecth">
          <div className="d-flex flex-column section">
            <div className="title text-success">{t("Our Brands")}</div>
            <div className="text text-dark">
              {t(
                "With a focus on higher quality, Panda introduced in 2009 a portfolio of private label products ranging from food, non-food to personal care, home care and beauty care products."
              )}
            </div>
          </div>
          <BrandCardCarousel />
        </div>
        <div className="home-section-4 multi-lingual d-flex flex-column flex-md-row justify-content-center align-items-strecth">
          <div className="d-flex flex-column bg-primary section">
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
              {/* <InteractiveBtn
                color="white"
                reverseColor="#014a2a"
                text="LEARN MORE"
                url="/"
              /> */}
            </div>
          </div>
          <div className="position-relative fill">
            <img src="/img/social-resp.PNG" alt="panda-social" />
          </div>
        </div>
        <TimelineSection />
        <CareerContactSection />
        <div className="home-section-7 multi-lingual d-flex flex-column-reverse flex-md-row justify-content-center align-items-strecth">
          <div className="position-relative youtube-wrapper">
            <YoutubePlayer />
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

export default Home;
