import { ContactCard } from "../../atoms";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

type ContactCardProps = {
  img: string;
  cornerText: string;
  title: string;
  text: string;
  learnMoreLink: string;
};

type DoubleCardSectionProps = {
  firstCard: ContactCardProps;
  secondCard: ContactCardProps;
  bgColor: string;
};

const DoubleCardSection = (props: DoubleCardSectionProps) => {
  return (
    <Row className={`multi-lingual m-5 p-5 row-gap-4 bg-${props.bgColor}`}>
      <Col xs={12} lg={6}>
        <ContactCard
          img={props.firstCard.img}
          cornerText={props.firstCard.cornerText}
          title={props.firstCard.title}
          text={props.firstCard.text}
          learnMoreLink={props.firstCard.learnMoreLink}
        />
      </Col>
      <Col xs={12} lg={6}>
        <ContactCard
          img={props.secondCard.img}
          cornerText={props.secondCard.cornerText}
          title={props.secondCard.title}
          text={props.secondCard.text}
          learnMoreLink={props.secondCard.learnMoreLink}
        />
      </Col>
    </Row>
  );
};

export default DoubleCardSection;
