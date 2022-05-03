import React from 'react'
import styled from 'styled-components'

function Viewers() {
  return (
    <Container className="conti">
      <Wrap>
        <video loop={true} autoPlay={true} muted playsInline={true}>
          <source src="/videos/1564674844-disney.mp4 " type="video/mp4" />
        </video>
        <img src="/images/viewers-disney.png" alt="" />
      </Wrap>
      <Wrap>
        <video
          src="/videos/1564676115-marvel.mp4 "
          type="video/mp4"
          loop={true}
          autoPlay={true}
          muted
          playsInline={true}
        ></video>
        <img src="/images/viewers-marvel.png" alt="" />
      </Wrap>
      <Wrap>
        <video
          src="/videos/1564676296-national-geographic.mp4 "
          type="video/mp4"
          loop={true}
          autoPlay={true}
          muted
          playsInline={true}
        ></video>
        <img src="/images/viewers-national.png" alt="" />
      </Wrap>
      <Wrap>
        <video
          src="/videos/1564676714-pixar.mp4 "
          type="video/mp4"
          loop={true}
          autoPlay={true}
          muted
          playsInline={true}
        ></video>
        <img src="/images/viewers-pixar.png" alt="" />
      </Wrap>
      <Wrap>
        <video
          src="/videos/1608229455-star-wars.mp4"
          type="video/mp4"
          loop={true}
          autoPlay={true}
          muted
          playsInline={true}
        ></video>
        <img src="/images/viewers-starwars.png" alt="" />
      </Wrap>
    </Container>
  )
}

const Container = styled.div`
  padding: 30px 0px 20px;
  margin-top: 30px;
`

const Wrap = styled.div`
  border-radius: 10px;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  cursor: pointer;
  overflow: hidden;
  transition: all 250ms cubic-bezier(0.25, 0.45, 0.46, 0.94);
  position: relative;
  border: 3px solid rgb(49, 49, 49, 0.9);

  img {
    display: block;
    inset: 0px;
    width: 100%;
    posotion: absolute;
    height: 100%;
    object-fit: cover;
    transition: opacity 500ms ease-in-out;
    z-index: -1;
    opacity: 1;
    top: 0;
  }

  video {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0px;
    opacity: 0;
    z-index: 1;

    &:hover {
      opacity: 1;
    }
  }

  &:hover {
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
      rgb(0 0 0 / 72%) 0px 30px 22px -10px;
    transform: scale(1.05);
    border-color: rgb(249, 249, 249, 0.8);
  }
`

export default Viewers
