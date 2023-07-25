import { useEffect } from "react";
import {
  ContactUsSection,
  InfographSection,
  StayConnectedSection,
} from "../../components/organisms";
import { useTranslation } from "react-i18next";
import MainTemp from "../../components/templates/MainTemp";

const Contact = () => {
  const { t } = useTranslation();
  useEffect(() => {
    document.title = t("Contact - Panda");
  }, []);

  return (
    <MainTemp>
      <>
        <StayConnectedSection
          assetComponent={<img src="/img/panda_map_v2.jpg" alt="Panda Map" />}
          assetFill={true}
          reverse={true}
          title="Stay Connected"
          titleColor="success"
          subTitle="KSA"
          subTitleColor="primary"
          textColor="dark"
          bgColor="white"
        />
        <ContactUsSection />
        <InfographSection
          assetComponent={
            <img
              src="/img/speakup-icon.svg"
              alt="Speak up"
              className="w-50 m-5"
            />
          }
          assetFill={false}
          reverse={false}
          title=""
          titleColor="white"
          subTitle="Speak up"
          subTitleColor="white"
          text={[
            "If you suspect any possible violation of our Code of Conduct or any wrong practices speak up and report immediately.",
            "Integrity is one of our values and is paramount to the success of our business. If you suspect any unethical activities or misconduct use the confidential Integrity Hotline which is completely independent and secure.",
          ]}
          textColor="white"
          bgColor="primary"
        />
      </>
    </MainTemp>
  );
};

export default Contact;
