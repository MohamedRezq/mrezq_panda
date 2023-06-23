import React from "react";
//-----> icons import <-------------------------------------------------//
import { FiFacebook, FiTwitter } from "react-icons/fi";
import { AiOutlineInstagram, AiOutlineYoutube } from "react-icons/ai";
import { SlSocialLinkedin } from "react-icons/sl";
import IconWrapper from "./IconWrapper";

const HeaderIconGroup = () => {
  return (
    <div className="d-flex" style={{ gap: "20px" }}>
      {[
        <FiFacebook />,
        <AiOutlineInstagram />,
        <AiOutlineYoutube />,
        <FiTwitter />,
        <SlSocialLinkedin />,
      ].map((icon, i) => (
        <IconWrapper
          key={`header-social-icon-${i}`}
          color="success"
          icon={icon}
          url={``}
          size={"25px"}
        />
      ))}
    </div>
  );
};

export default HeaderIconGroup;
