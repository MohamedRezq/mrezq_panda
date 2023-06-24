import React from "react";
import { Link } from "react-router-dom";
import { HiArrowLongRight } from "react-icons/hi2";
import { useTranslation } from "react-i18next";

type InteractiveBtnProps = {
  url: string;
  text: string;
  color?: string;
  reverseColor?: string;
};

const InteractiveBtn = (props: InteractiveBtnProps) => {
  const { t } = useTranslation();
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
      {t(props.text)}
      <div className="arrow-icon" style={{ paddingBottom: "2px" }}>
        <HiArrowLongRight size={20} className="arrow-icon" />
      </div>
    </Link>
  );
};

export default InteractiveBtn;
