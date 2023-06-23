import React from "react";
import { Link } from "react-router-dom";

type FooterLinksColProps = {
  title: string;
  links: { text: string; url: string }[];
};

const FooterLinksCol: React.FC<FooterLinksColProps> = (
  props: FooterLinksColProps
) => {
  return (
    <div className="links-col d-flex flex-column">
      <div
        className="links-col-title text-success mb-3"
        style={{ fontWeight: "bold" }}
      >
        {props.title}
      </div>

      {props.links.map((link, i) => (
        <Link
          key={`footer-link-${link.text}-${i}`}
          to={link.url}
          className="footer-link text-main"
        >
          {link.text}
        </Link>
      ))}
    </div>
  );
};

export default FooterLinksCol;
