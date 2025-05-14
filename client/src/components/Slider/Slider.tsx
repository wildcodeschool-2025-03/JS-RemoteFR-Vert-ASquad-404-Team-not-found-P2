import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./Slider.css";
import { Carousel } from "react-responsive-carousel";

type SliderType = {
  img1?: string;
  img2?: string;
  img3?: string;
  img4?: string;
  img5?: string;
  name?: string;
};

function Slider({ img1, img2, img3, img4, img5, name }: SliderType) {
  return (
    <Carousel>
      <img src={img1} alt={name} />
      <img src={img2} alt={name} />
      <img src={img3} alt={name} />
      <img src={img4} alt={name} />
      <img src={img5} alt={name} />
    </Carousel>
  );
}

export default Slider;
