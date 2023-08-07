import styled from "@emotion/styled";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Wrapper = styled.div`
  height: 400px;
  background-color: white;
  padding-top: 50px;
`;
const SlickItem = styled.img`
  margin: auto;
  height: 300px;
`;

export default function LayoutBanner(): JSX.Element {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Wrapper>
      <Slider {...settings}>
        <div>
          <SlickItem src="/images/layout/banner/item1.png" />
        </div>
        <div>
          <SlickItem src="/images/layout/banner/item1.png" />
        </div>
        <div>
          <SlickItem src="/images/layout/banner/item1.png" />
        </div>
      </Slider>
    </Wrapper>
  );
}
