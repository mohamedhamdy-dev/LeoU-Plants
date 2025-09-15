import "./Gallery.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
const imagesData = [
  {
    id: 1,
    url: "/gallery/aa.jpg",
  },
  {
    id: 2,
    url: "/gallery/bb.jpg",
  },
  {
    id: 3,
    url: "/gallery/cc.jpg",
  },
  {
    id: 4,
    url: "/gallery/dd.jpg",
  },
  {
    id: 5,
    url: "/gallery/ee.jpg",
  },
  {
    id: 6,
    url: "/gallery/ff.jpg",
  },
];
var settings = {
  infinite: false,
  dots: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },

    {
      breakpoint: 992,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

export default function Gallery() {
  return (
    <div className="gallery">
      <Slider {...settings}>
        {imagesData.map((image) => (
          <div className="gallery__container">
            <img src={image.url} alt={image.id} className="gallery__img" />
          </div>
        ))}
      </Slider>
    </div>
  );
}
