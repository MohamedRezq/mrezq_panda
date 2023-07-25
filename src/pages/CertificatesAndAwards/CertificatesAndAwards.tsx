import { useLocation } from "react-router-dom";
import {
  DoubleCardSection,
  GradientBannerSection,
  InfographSection,
  OurAwardsSection,
} from "../../components/organisms";
import MainTemp from "../../components/templates/MainTemp";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

const CertificatesAndAwards = () => {
  const { t } = useTranslation();
  const location = useLocation();
  useEffect(() => {
    document.title = t("Certificates & Awards - Panda");
  }, []);
  return (
    <MainTemp>
      <>
        <GradientBannerSection
          largeBanner="/img/cert-banner-lg_cleanup.PNG"
          mobileBanner="/img/cert-banner-sm_cleanup.PNG"
          title={"Certificates & Awards"}
          textColor="primary"
        />
        <InfographSection
          assetComponent={
            <img
              src="/img/d-our-achievements-2-640x445.jpg"
              alt="Certificates & Awards"
              className=" m-lg-5"
            />
          }
          assetFill={false}
          title="Our achievements"
          titleColor="success"
          subTitle=""
          subTitleColor=""
          text={[
            "Our success is wholly dependent on the communities and the customers we serve. We strive every day to nurture our entire Panda team, our communities, to surprise and delight with constant improvements to the quality of life of everyone in the region. With this in mind we work hard to achieve in every area of life Panda touches. Our collective achievements are also our inspiration to carry on the work we do to the best of our ability.",
          ]}
          textColor="dark"
          bgColor="white"
        />
        <OurAwardsSection />
        <DoubleCardSection
          firstCard={{
            img: "/img/careers.jpg",
            cornerText: "About Panda",
            title: "Largest Retail Chain in the Middle East",
            text: "Panda is one of the largest retail chain businesses in the Middle East and the main player in the retail sector in KSA.",
            learnMoreLink: `/${location.pathname.split("/")[1]}/about`,
          }}
          secondCard={{
            img: "/img/our-history-ryiadh.jpg",
            cornerText: "Our History",
            title: "Began in the heart of Riyadh",
            text: "Beginnings in the heart of Riyadh Panda started from a small store in Riyadh and grew to become the largest retailer in Saudi Arabia.",
            learnMoreLink: `${location.pathname.split("/")[1]}/our-history`,
          }}
          bgColor="white"
        />
      </>
    </MainTemp>
  );
};

export default CertificatesAndAwards;
