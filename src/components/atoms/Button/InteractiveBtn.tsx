import React from "react";
import { Link } from "react-router-dom";
import { HiArrowLongRight } from "react-icons/hi2";
import { useTranslation } from "react-i18next";

type InteractiveBtnProps = {
  url: string;
  text: string;
};

const InteractiveBtn = (props: InteractiveBtnProps) => {
  const { t } = useTranslation();
  return (
    <Link to={props.url} className="interactive-btn">
      {t(props.text)}
      <div className="arrow-icon" style={{ paddingBottom: "2px" }}>
        <HiArrowLongRight size={20} className="arrow-icon" />
      </div>
    </Link>
  );
};

export default InteractiveBtn;
