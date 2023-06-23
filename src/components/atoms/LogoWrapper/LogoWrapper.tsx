import React from "react";

type LogoWrapperProps = {
  width?: string;
  height?: string;
};

const LogoWrapper: React.FC<LogoWrapperProps> = (props: LogoWrapperProps) => {
  return (
    <div className="logoWrapper position-relative">
      <img src="/logo.svg" alt="Panda" style={{ width: props.width }} />
    </div>
  );
};

export default LogoWrapper;
