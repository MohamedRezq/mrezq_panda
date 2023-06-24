import React from "react";

type BrandCardProps = {
  text: string;
  img: string;
};

const BrandCard = (props: BrandCardProps) => {
  return (
    <div className="brand-card text-primary">
      <div>
        <img src={props.img} alt={props.text} />
      </div>
      <div className="text">{props.text}</div>
    </div>
  );
};

export default BrandCard;
