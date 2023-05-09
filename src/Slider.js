import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Image from 'next/image';

export default function SimpleSlider({ images, direction = 'right' }) {
    const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    rtl: direction === 'left',
    arrows: false,
  };

  return (
    <Slider {...settings}>
      {images.map((image, index) => (
        <div key={index} className="p-1">
          <Image src={image} width={300} height={300} alt={`NFT ${index}`} />
        </div>
      ))}
    </Slider>
  );
}
