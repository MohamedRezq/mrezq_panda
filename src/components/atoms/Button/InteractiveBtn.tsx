import React from "react";
import { Link, useLocation } from "react-router-dom";
import { HiArrowLongLeft, HiArrowLongRight } from "react-icons/hi2";
import { useTranslation } from "react-i18next";

type InteractiveBtnProps = {
  url: string;
  text: string;
  color?: string;
  reverseColor?: string;
};

const InteractiveBtn = (props: InteractiveBtnProps) => {
  const { t } = useTranslation();
  const location = useLocation();
  let langDetector;
  React.useEffect(() => {
    langDetector = location.pathname.split("/")[1]; // "en" || "ar"
  }, []);

  const leaveStyle = {
    border: `solid 2px ${props.color || "success"}`,
    color: `${props.color || "success"}`,
  };
  const hoverStyle = {
    border: `solid 2px ${props.color || "success"}`,
    color: `${props.reverseColor || "white"}`,
    backgroundColor: `${props.color || "success"}`,
  };
  const [isHover, setIsHover] = React.useState(false);
  const handleMouseEnter = () => {
    setIsHover(true);
  };
  const handleMouseLeave = () => {
    setIsHover(false);
  };
  return (
    <Link
      to={props.url}
      className="interactive-btn"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={isHover ? hoverStyle : leaveStyle}
    >
      <div>{t(props.text)}</div>
      <div className="arrow-icon" style={{ paddingBottom: "2px" }}>
        {langDetector === "ar" ? (
          <HiArrowLongRight size={20} className="arrow-icon" />
        ) : (
          <HiArrowLongLeft size={20} className="arrow-icon" />
        )}
      </div>
    </Link>
  );
};

export default InteractiveBtn;
