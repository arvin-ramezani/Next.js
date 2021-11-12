import { MdRadioButtonChecked } from "react-icons/md";
import Image from "next/image";
import React, { LegacyRef, useState } from "react";
import Slider from "react-slick";

export default function Carousel() {
  const [sliderRef, setSliderRef] = useState<Slider | null>(null);

  const CustomDots = (dots: React.ReactNode): JSX.Element => {
    return <ul>{dots}</ul>;
  };

  const CustomPaging = (i: number): JSX.Element => <MdRadioButtonChecked />;

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <button onClick={sliderRef?.slickPrev}>prev</button>
      <button onClick={sliderRef?.slickNext}>next</button>
      <Slider
        {...settings}
        arrows={false}
        customPaging={CustomPaging}
        ref={setSliderRef}
        autoplay={true}
        appendDots={CustomDots}
        dotsClass="slick-custom-dots"
      >
        <div>
          <Image
            width="400"
            height="300"
            alt="stydents-photos"
            src="/images/carousel/carousel1.jpg"
          />
        </div>
        <div>
          <Image
            width="400"
            height="300"
            alt="stydents-photos"
            src="/images/carousel/carousel2.jpg"
          />
        </div>
        <div>
          <Image
            width="400"
            height="300"
            alt="stydents-photos"
            src="/images/carousel/carousel3.jpg"
          />
        </div>
        <div>
          <Image
            width="400"
            height="300"
            alt="stydents-photos"
            src="/images/carousel/carousel4.jpg"
          />
        </div>
        <div>
          <Image
            width="400"
            height="300"
            alt="stydents-photos"
            src="/images/carousel/carousel5.jpg"
          />
        </div>
        <div>
          <Image
            width="400"
            height="300"
            alt="stydents-photos"
            src="/images/carousel/carousel6.jpg"
          />
        </div>
        <div>
          <Image
            width="400"
            height="300"
            alt="stydents-photos"
            src="/images/carousel/carousel7.jpg"
          />
        </div>
      </Slider>
    </>
  );
}
