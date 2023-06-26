import React from "react";
import { useTranslation } from "react-i18next";

type ValueCardProps = {
  title: string;
  text: string;
  img: string;
};

const ValueCard = (props: ValueCardProps) => {
  const { t } = useTranslation();
  return (
    <div className="value-card text-primary">
      <div className="img-wrapper">
        <img src={props.img} alt={props.text} />
      </div>
      <div className="title text-success">{t(props.title)}</div>
      <div className="text text-dark">{t(props.text)}</div>
    </div>
  );
};

export default ValueCard;
