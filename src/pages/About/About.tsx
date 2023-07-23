import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
//-- Assets -------------------------------------------------------------------//

//-- Components ---------------------------------------------------------------//
import MainTemp from "../../components/templates/MainTemp";
import {
  GradientBannerSection,
  InfographSection,
  OurBrandsSection,
  OurValuesSection,
  OurVisionOurMissionSection,
  StatsSection,
  TimelineSection,
} from "../../components/organisms";
//----------------------------------------------------------------------------//
//----------------------------------------------------------------------------//

const AboutPage = () => {
  const { t } = useTranslation();
  useEffect(() => {
    document.title = t("About - Panda");
  }, []);

  return (
    <MainTemp>
      <>
        <GradientBannerSection
          largeBanner="/img/about-banner.PNG"
          mobileBanner="/img/about-banner-mobile.PNG"
          title={"About Panda"}
          textColor="primary"
        />
        <InfographSection
          assetComponent={
            <img
              src="/img/d-about-what-we-do-640x508.jpg"
              alt="About Panda"
              className=" m-lg-5"
            />
          }
          assetFill={false}
          title="What we do"
          titleColor="success"
          subTitle=""
          subTitleColor=""
          text={[
            "Headquartered in the Kingdom of Saudi Arabia, Panda Retail Company is one of the main retail chain businesses in the Middle East and the biggest grocery retailer in the country with more than 188 stores in 40 cities.",
            "Panda operates 2 type of stores, Hyper Panda (larger stores) and Panda Supermarkets.",
            "With more than 100 million customers visiting our stores every year, we operate 4 main distribution centers in the country with a fleet of more than 600 trucks to deliver 30,000 SKUs of food and non-food products to our stores.",
            "Since 2009, Panda has also introduced more than 400 private label products to serve our customers as a trusted retailer of choice in a number of food and non-food categories.",
            "Over 17,000 employees work with dedication and commitment that is second to none in order to cater to the shopping needs of our customers.",
          ]}
          textColor="dark"
          bgColor="white"
        />
        <StatsSection />
        <OurVisionOurMissionSection
          assetComponent={
            <img src="/img/our-vision-leadership.jpg" alt="Our Vision" />
          }
        />
        <TimelineSection />
        <OurValuesSection />
        <OurBrandsSection />
        <InfographSection
          assetComponent={
            <>
              <img
                src="/img/dr_bander_hamooh_leadership.jpg"
                alt="Panda Leader"
              />
              <div className="photo-label-container bg-white">
                <div className=" text-success">{t("Dr. Bander Hamooh")}</div>
                <div className=" text-light">
                  {t("Chief Executive Officer")}
                </div>
              </div>
            </>
          }
          assetFill={true}
          title="Leadership"
          titleColor="white"
          subTitle="Seasoned Leadership Team Driving Panda success"
          subTitleColor="white"
          text={[
            "Our executive team of experienced retail experts is backed by a strongly motivated, diverse group of managers and staff dedicated to creating a competitive customer value proposition.",
            "Our highly seasoned and talented senior management team, with an average of nearly 30 years of retail industry experience, provides strong leadership to focus on our company’s overall growth and community partnership goals.",
          ]}
          textColor="white"
          bgColor="primary"
        />
      </>
    </MainTemp>
  );
};

export default AboutPage;
