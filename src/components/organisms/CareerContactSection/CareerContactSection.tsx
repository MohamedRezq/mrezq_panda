import { useTranslation } from "react-i18next";
import { ContactCard } from "../../atoms";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const CareerContactSection = () => {
  const { t } = useTranslation();
  return (
    <Row className="multi-lingual p-5 row-gap-4 bg-white">
      <Col xs={12} lg={6}>
        <ContactCard
          img="/img/careers.jpg"
          cornerText="Careers"
          title="Working with Panda"
          text="We create an integrated work environment for you."
          learnMoreLink="/careers"
        />
      </Col>
      <Col xs={12} lg={6}>
        <ContactCard
          img="/img/contact-us-savola.png"
          cornerText="Contact Us"
          title="Partnering with Panda"
          text="Please get in touch with the team if you have an enquiry."
          learnMoreLink="/contact"
        />
      </Col>
    </Row>
  );
};

export default CareerContactSection;
