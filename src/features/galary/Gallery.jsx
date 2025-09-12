import "./Gallery.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
const imagesData = [
  {
    id: 1,
    img: "/gallary/aa.jpg",
  },
  {
    id: 2,
    img: "/gallary/bb.jpg",
  },
  {
    id: 3,
    img: "/gallary/cc.jpg",
  },
  {
    id: 4,
    img: "/gallary/dd.jpg",
  },
  {
    id: 5,
    img: "/gallary/ee.jpg",
  },
  {
    id: 6,
    img: "/gallary/ff.jpg",
  },
];
var settings = {
  infinite: false,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 530,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};
export default function Gallery() {
  return (
    <div className="gallery-container">
      <Slider {...settings}>
        {imagesData.map((curImage) => (
          <Image image={curImage} key={curImage.id} />
        ))}
      </Slider>
    </div>
  );
}

function Image({ image }) {
  return (
    <div className="gallery-image">
      <img
        src={Object.values(image)[1]}
        alt={image.id}
        className="gallery-image-img"
      ></img>
    </div>
  );
}
