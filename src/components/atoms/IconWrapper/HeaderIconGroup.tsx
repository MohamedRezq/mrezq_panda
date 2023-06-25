import React from "react";
//-----> icons import <-------------------------------------------------//
import { FiFacebook, FiTwitter } from "react-icons/fi";
import { AiOutlineInstagram, AiOutlineYoutube } from "react-icons/ai";
import { SlSocialLinkedin } from "react-icons/sl";
import IconWrapper from "./IconWrapper";

type HeaderIconGroupProps = {
  iconSize: string;
};

const HeaderIconGroup = (props: HeaderIconGroupProps) => {
  return (
    <div className="d-flex" style={{ gap: "20px" }}>
      {[
        { elem: <FiFacebook />, url: "https://www.facebook.com/PandaSaudi" },
        {
          elem: <AiOutlineInstagram />,
          url: "https://www.instagram.com/pandasaudi",
        },
        {
          elem: <AiOutlineYoutube />,
          url: "https://www.youtube.com/channel/UCoq-QkHplVvXm4i4DxPuCHw",
        },
        { elem: <FiTwitter />, url: "https://twitter.com/PandaSaudi" },
        {
          elem: <SlSocialLinkedin />,
          url: "https://www.linkedin.com/company/azizia-panda-united-savola-group/",
        },
      ].map((icon, i) => (
        <IconWrapper
          key={`header-social-icon-${i}`}
          color="success"
          icon={icon.elem}
          url={icon.url}
          size={props.iconSize}
        />
      ))}
    </div>
  );
};

export default HeaderIconGroup;
