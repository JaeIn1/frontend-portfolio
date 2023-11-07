import styled from "@emotion/styled";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Wrapper = styled.div`
  height: 400px;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
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
  height: 400px;
  object-fit: inherit;
`;
const Pre = styled.div`
  position: absolute;
  left: 11%;
  z-index: 3;

  & img {
    border-radius: 50%;
    background-color: gray;
    padding: 20px;
  }
`;

const NextTo = styled.div`
  position: absolute;
  right: 11%;
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
        <img src="/images/banner/next_arrow.png" />
      </NextTo>
    ),
    prevArrow: (
      <Pre>
        <img src="/images/banner/prev_arrow.png" />
      </Pre>
    ),
  };
  return (
    <Wrapper>
      <StyledSlider {...settings}>
        <div>
          <SlickItem src="https://cdn.imweb.me/thumbnail/20231105/6ffb3ce5740e0.jpg" />
        </div>
        <div>
          <SlickItem src="https://cdn.imweb.me/thumbnail/20211014/ac9c7e74b7db2.png" />
        </div>
      </StyledSlider>
    </Wrapper>
  );
}
