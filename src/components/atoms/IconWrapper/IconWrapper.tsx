import React, { ReactElement } from "react";

type IconWrapperProps = {
  //height: string;
  color: string;
  icon: ReactElement;
  url: string;
  size: string;
};

const IconWrapper: React.FC<IconWrapperProps> = (props: IconWrapperProps) => {
  return (
    <a
      href={props.url}
      className={`text-${props.color}`}
      style={{ fontSize: props.size, fontWeight: "lighter" }}
    >
      {props.icon}
    </a>
  );
};

export default IconWrapper;
