import React from 'react'
import styled from 'styled-components'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'

function ImageSlider() {
  let settings = {
    dots: true,
    infinite: true,
    speed: 2200,
    slideToShow: 1,
    slideToScroll: 1,
    autoplay: true,
    //
  }
  return (
    <Carousel {...settings}>
      <Wrap>
        <a>
          <img src="/images/slider-badag.jpg" alt="" />
        </a>
      </Wrap>
      <Wrap>
        <a>
          <img src="/images/slider-badging.jpg" alt="" />
        </a>
      </Wrap>
      <Wrap>
        <a>
          <img src="/images/slider-scale.jpg" alt="" />
        </a>
      </Wrap>
      <Wrap>
        <a>
          <img src="/images/slider-scales.jpg" alt="" />
        </a>
      </Wrap>
    </Carousel>
  )
}

const Carousel = styled(Slider)`
  margin-top: 20px;
  margin-right: 25px;

  & > button {
    opacity: 0;
    height: 100%;
    width: 5vw;
    z-index: 1;

    &:hover {
      opacity: 1;
      transition: opacity 0.2s ease 0s;
    }
  }

  ul li button {
    &:before {
      font-size: 10px;
      color: rgb(150, 158, 171);
    }
  }

  li.slick-active button:before {
    color: white;
  }

  .slick-list {
    overflow: initial;
  }

  .slick-prev {
    left: -46px;
  }

  .slick-next {
    right: -70px;
  }
`

const Wrap = styled.div`
  cursor: pointer;
  position: relative;
  border-radius: 4px;

  a {
    border-radius: 4px;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
      rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    cursor: pointer;
    position: relative;
    padding: 4px;
    display: block;

    img {
      width: 100%;
      height: 100%;
    }

    &:hover {
      padding: 0;
      border: 4px solid rgb(249, 249, 249, 0.8);
      transition-duration: 300ms;
    }
  }
`

export default ImageSlider
