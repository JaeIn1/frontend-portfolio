import styled from "@emotion/styled";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Wrapper = styled.div`
  height: 270px;
  background-color: white;
`;
const StyledSlider = styled(Slider)`
  height: 100%;
  width: 100%;
  position: relative;
  .slick-prev::before,
  .slick-next::before {
    opacity: 0;
    display: none;
  }
`;

const SlickItem = styled.img`
  margin: 0;
  width: 100%;
  height: 270px;
`;
const Pre = styled.div`
  position: absolute;
  left: 10%;
  z-index: 3;

  & img {
    border-radius: 50%;
    background-color: gray;
    padding: 20px;
  }
`;

const NextTo = styled.div`
  position: absolute;
  right: 10%;
  z-index: 3;

  & img {
    border-radius: 50%;
    background-color: gray;
    padding: 20px;
  }
`;

export default function LayoutBanner(): JSX.Element {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    nextArrow: (
      <NextTo>
        <img src="images/banner/next_arrow.png" />
      </NextTo>
    ),
    prevArrow: (
      <Pre>
        <img src="images/banner/prev_arrow.png" />
      </Pre>
    ),
  };
  return (
    <Wrapper>
      <StyledSlider {...settings}>
        <div>
          <SlickItem src="/images/layout/banner/banner-img03.png" />
        </div>
        <div>
          <SlickItem src="/images/layout/banner/banner-img02.png" />
        </div>
        <div>
          <SlickItem src="/images/layout/banner/banner-img01.png" />
        </div>
      </StyledSlider>
    </Wrapper>
  );
}
