import { BrandCardCarousel } from "../../molecules/Carousels";
import { useTranslation } from "react-i18next";

const OurBrandsSection = () => {
  const { t } = useTranslation();
  return (
    <div className="infograph-section p-lg-3 multi-lingual d-flex flex-column flex-lg-row justify-content-center align-items-strecth">
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
  );
};

export default OurBrandsSection;
