import { useTranslation } from "react-i18next";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import { Link } from "react-router-dom";
import { ReactElement } from "react";

type OverlayBtnProps = {
  btnText: string;
  btnLink: string;
  elem1: ReactElement;
  elem2: ReactElement;
  isOverLay: boolean;
};

const OverlayBtn = (props: OverlayBtnProps) => {
  const { t } = useTranslation();

  return (
    <OverlayTrigger
      placement="bottom"
      delay={{ show: 250, hide: 2000 }}
      overlay={
        props.isOverLay ? (
          <div
            id="button-tooltip"
            {...props}
            className="overlayContainer multi-lingual"
          >
            <div>{props.elem1}</div>
            <div>{props.elem2}</div>
          </div>
        ) : (
          <></>
        )
      }
    >
      <Link to={props.btnLink} style={{ color: "white" }}>
        {t(`${props.btnText}`)}
      </Link>
    </OverlayTrigger>
  );
};

export default OverlayBtn;
