import React from "react";
import { Link } from "react-router-dom";

type LogoWrapperProps = {
  width?: string;
  height?: string;
};

const LogoWrapper: React.FC<LogoWrapperProps> = (props: LogoWrapperProps) => {
  return (
    <Link to="/">
      <div className="logoWrapper position-relative">
        <img src="/logo.svg" alt="Panda" style={{ width: props.width }} />
      </div>
    </Link>
  );
};

export default LogoWrapper;
