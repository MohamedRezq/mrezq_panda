import React from "react";
import Accordion from "react-bootstrap/Accordion";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

type MobileMenuProps = {
  dir: string;
};

const MobileMenu = (props: MobileMenuProps) => {
  const { t } = useTranslation();

  return (
    <Accordion dir={props.dir} defaultActiveKey="0" className="w-100">
      {/* <Accordion.Item eventKey="0">
        <Accordion.Header>QUICK LINKS</Accordion.Header>
        <Accordion.Body>
          <Link className="w-100 accordion-link" to="">
            Link 2
          </Link>
          <Link className="w-100 accordion-link" to="">
            Link 2
          </Link>
        </Accordion.Body>
      </Accordion.Item> */}
      <Accordion.Item eventKey="1">
        <Accordion.Header>{t("SHOP WITH US")}</Accordion.Header>
        <Accordion.Body>
          <Link className="w-100 accordion-link" to="https://panda.com.sa/en/">
            {t("Panda Click")}
          </Link>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>{t("BECOME A SUPPLIER")}</Accordion.Header>
        <Accordion.Body>
          <Link
            className="w-100 accordion-link"
            to="https://panda.com.sa/supplier/"
          >
            {t("BECOME A SUPPLIER")}
          </Link>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>{t("PANDA PLUS")}</Accordion.Header>
        <Accordion.Body>
          <Link className="w-100 accordion-link" to="https://plus.panda.sa/en/">
            {t("Panda plus")}
          </Link>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};

export default MobileMenu;
