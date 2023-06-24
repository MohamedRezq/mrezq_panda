import React from "react";

type ValueCardProps = {
  title: string;
  text: string;
  img: string;
};

const ValueCard = (props: ValueCardProps) => {
  return (
    <div className="value-card text-primary">
      <div className="img-wrapper">
        <img src={props.img} alt={props.text} />
      </div>
      <div className="title text-success">{props.title}</div>
      <div className="text text-dark">{props.text}</div>
    </div>
  );
};

export default ValueCard;
