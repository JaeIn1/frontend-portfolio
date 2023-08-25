import styled from "@emotion/styled";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Wrapper = styled.div`
  height: 270px;
  background-color: white;
`;
const SlickItem = styled.img`
  margin: 0;
  width: 100%;
  height: 270px;
`;

export default function LayoutBanner(): JSX.Element {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: true,
    autoplaySpeed: 5000,
  };
  return (
    <Wrapper>
      <Slider {...settings}>
        <div>
          <SlickItem src="/images/layout/banner/banner-img03.png" />
        </div>
        <div>
          <SlickItem src="/images/layout/banner/banner-img02.png" />
        </div>
        <div>
          <SlickItem src="/images/layout/banner/banner-img01.png" />
        </div>
      </Slider>
    </Wrapper>
  );
}
