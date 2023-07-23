import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

type ContactCardProps = {
  img: string;
  cornerText: string;
  title: string;
  text: string;
  learnMoreLink: string;
};

const ContactCard = (props: ContactCardProps) => {
  const { t } = useTranslation();
  return (
    <div className="contact-card p-3 d-flex flex-column row-gap-3">
      <div className="contact-card-corner-text position-absolute text-success align-text-top">
        {t(props.cornerText)}
      </div>
      <img className="w-100" src={props.img} alt={t(props.cornerText)} />
      <div className="contact-card-title text-dark">{t(props.title)}</div>
      <div className="contact-card-text text-dark">{t(props.text)}</div>
      <Link
        to={props.learnMoreLink}
        className="contact-card-learn-more text-success"
      >
        {t("Learn More")}
      </Link>
    </div>
  );
};

export default ContactCard;
