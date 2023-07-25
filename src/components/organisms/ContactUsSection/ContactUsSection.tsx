import { useTranslation } from "react-i18next";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
//-- Static Data --------------------------------------------------------------//
import { pandaValueCardsData } from "../../../data";
import { InteractiveBtn } from "../../atoms/Button";
//-- Components ---------------------------------------------------------------//

//----------------------------------------------------------------------------//
//----------------------------------------------------------------------------//

const ContactUsSection = () => {
  const { t } = useTranslation();
  return (
    <div
      className="contact-us-section text-dark position-relative d-flex flex-column align-items-center row-gap-2 w-100"
      style={{ backgroundColor: "#FFF9EC" }}
    >
      <div className="title my-5">{t("Contact Us")}</div>
      <Form className="multi-lingual">
        <Row className="mb-3 multi-lingual row-gap-3 align-items-end">
          <Col xs={12} lg={6}>
            <Form.Group as={Col} controlId="formGridState">
              <Form.Label>{t("Title")}</Form.Label>
              <Form.Select defaultValue={t("Mr")}>
                <option>{t("Mr.")}</option>
                <option>{t("Mrs.")}</option>
              </Form.Select>
            </Form.Group>
          </Col>
          <Col xs={12} lg={6}>
            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Control type="text" placeholder={t("Name")} />
            </Form.Group>
          </Col>
        </Row>
        <Row className="mb-3 multi-lingual row-gap-3 align-items-end">
          <Col xs={12} lg={6}>
            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Control type="email" placeholder={t("Email")} />
            </Form.Group>
          </Col>
          <Col xs={12} lg={6}>
            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Control type="tel" placeholder={t("Phone")} />
            </Form.Group>
          </Col>
        </Row>
        <Form.Group className="mb-3" as={Col} controlId="formGridState">
          <Form.Label>{t("Enquiry")}</Form.Label>
          <Form.Select defaultValue="Mr.">
            <option>{t("Investor Enquiry")}</option>
            <option>{t("Supplier Enquiry")}</option>
            <option>{t("Employee Enquiry")}</option>
            <option>{t("Careers Enquiry")}</option>
            <option>{t("Other")}</option>
          </Form.Select>
        </Form.Group>
        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Control
            as="textarea"
            type="text"
            placeholder={t("Message")}
            style={{ height: "200px" }}
          />
        </Form.Group>
        <div className="mt-4 mb-5">
          <InteractiveBtn
            color="#70bc1f"
            reverseColor="white"
            text={t("Submit")}
            url="/"
          />
        </div>
      </Form>

      <img
        src="/img/values_top_bg.svg"
        alt=""
        className="d-none d-lg-block position-absolute top-0"
        style={{ left: 0 }}
      />
      <img
        src="/img/values_bottom_bg.svg"
        alt=""
        className="d-none d-lg-block position-absolute right-0 bottom-0"
        style={{ right: 0 }}
      />
    </div>
  );
};

export default ContactUsSection;
