import React from "react";
import { useTranslation } from "react-i18next";

type BrandCardProps = {
  text: string;
  img: string;
};

const BrandCard = (props: BrandCardProps) => {
  const { t } = useTranslation();
  return (
    <div className="brand-card text-primary">
      <div className="img-wrapper">
        <img src={props.img} alt={props.text} />
      </div>
      <div className="text">{t(props.text)}</div>
    </div>
  );
};

export default BrandCard;
