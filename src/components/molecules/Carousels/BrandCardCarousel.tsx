import React from "react";
import { BrandCard } from "../../atoms/Cards";
import Carousel from "react-multi-carousel";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";

const brandsCardsData = [
  {
    text: "BEVERAGES",
    img: "/img/beverages.png",
  },
  {
    text: "BREAKFAST DIET & ORGANIC",
    img: "/img/breakfast.png",
  },
  {
    text: "PERSONAL CARE",
    img: "/img/personal-care.png",
  },
  {
    text: "ENTERTAINMENT & PET FOOD",
    img: "/img/entertainment.png",
  },
  {
    text: "BAKERY & PASTRY",
    img: "/img/bakery.png",
  },
  {
    text: "DAILY SELF SERVICE",
    img: "/img/daily-self.png",
  },
  {
    text: "FROZEN FOODS",
    img: "/img/frozen-food.png",
  },
  {
    text: "BEAUTY CARE",
    img: "/img/beauty-care.png",
  },
];

const BrandCardCarousel = () => {
  const ButtonGroup = ({ next, previous, goToSlide, ...rest }: any) => {
    const {
      carouselState: { currentSlide },
    } = rest;
    return (
      <div className="carousel-button-group position-absolute d-flex justify-content-center align-items-center column-gap-3">
        <div onClick={() => previous()}>
          <BsArrowLeftShort style={{ fontSize: "25px", fontWeight: "bold" }} />
        </div>
        <div onClick={() => next()}>
          <BsArrowRightShort style={{ fontSize: "25px", fontWeight: "bold" }} />
        </div>
      </div>
    );
  };
  return (
    <Carousel
      additionalTransfrom={0}
      arrows={false}
      autoPlaySpeed={3000}
      centerMode={false}
      className="carousel-body"
      containerClass="container-padding-bottom"
      customButtonGroup={<ButtonGroup />}
      dotListClass=""
      draggable
      focusOnSelect={false}
      infinite={false}
      itemClass=""
      keyBoardControl
      minimumTouchDrag={80}
      pauseOnHover
      renderArrowsWhenDisabled={false}
      renderButtonGroupOutside={false}
      renderDotsOutside={false}
      responsive={{
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3,
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
        },
      }}
      rewind={false}
      rewindWithAnimation={false}
      rtl={false}
      shouldResetAutoplay
      showDots={false}
      sliderClass=""
      slidesToSlide={1}
      swipeable
    >
      {brandsCardsData.map((brandCard, i) => (
        <BrandCard
          key={`brand-card-${i}-${brandCard.text}`}
          text={brandCard.text}
          img={brandCard.img}
        />
      ))}
    </Carousel>
  );
};

export default BrandCardCarousel;
