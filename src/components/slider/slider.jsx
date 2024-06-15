/* eslint-disable react/prop-types */
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

export default function SimpleSlider({ images }) {
  const settings = {
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: true,
  };
  return (
    <Slider {...settings}>
      {images?.map((item) => (
        <img
          key={item._id}
          className="object-contain"
          src={item.avatar}
          alt="banner"
        />
      ))}
    </Slider>
  );
}
