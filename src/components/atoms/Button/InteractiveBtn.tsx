import React from "react";
import { Link } from "react-router-dom";
import { HiArrowLongRight } from "react-icons/hi2";

type InteractiveBtnProps = {
  url: string;
  text: string;
};

const InteractiveBtn = (props: InteractiveBtnProps) => {
  return (
    <Link to={props.url} className="interactive-btn">
      {props.text}
      <HiArrowLongRight className="arrow-icon" />
    </Link>
  );
};

export default InteractiveBtn;
