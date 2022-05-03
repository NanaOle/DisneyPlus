import React from 'react'
import styled from 'styled-components'

function BigContainer1() {
  return (
    <>
      <Container id="firstoneto">
        <Content id="firtCon">
          <CTA>
            <Hulu id="bun">BUNDLE WITH ANY HULU PLAN & SAVE</Hulu>
            <CTALogoOne src="/images/cta-logo-one.svg" alt="" />
            <TheMessage>
              Get endless entertainment, live sports, and the shows and movies
              you love.
            </TheMessage>
            <SignUp>GET THE DISNEY BUNDLE</SignUp>
            <Description>
              Get Premier Access to Raya and the last Dragon for an additional
              fee with a Disney + subscription. As of 1/ 02/ 2022, the price of
              Disney + and The Disney bundle will increase by $1
            </Description>
            <CTALogoTow src="/images/cta-logo-two.png" alt="" />
          </CTA>
          <BgImage />
        </Content>
      </Container>
    </>
  )
}

const Container = styled.section`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  text-align: center;
  height: 100vh;
`

const Content = styled.div`
  margin-bottom: 10vw;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  position: relative;
  box-sizing: border-box;
  min-height: 100vh;
  flex-direction: column;
  padding: 80px 40px;
  height: 100%;
`

const BgImage = styled.div`
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: -1;
  background-position: top;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url('/images/login-background.jpg');
`

const CTA = styled.div`
  margin-bottom: 2vw;
  flex-direction: column;
  justify-content: center;
  margin-top: -240px;
  margin-left: auto;
  margin-right: auto;
  align-items: center;
  text-align: center;
  flex-wrap: wrap;
  max-width: 650px;
  transition-timing-function: ease-out;
  transition: opacity 0.2s;
  widht: 100%;
`

const Hulu = styled.h6`
  margin-top: 90px;
  color: #00ed82;
  font-size: 12px;
`

const CTALogoOne = styled.img`
  margin-bottom: 12px;
  max-width: 600px;
  max-height: 400px;
  display: block;
  width: 100%;
`

const TheMessage = styled.h3`
  font-size: 18px;
  padding-bottom: 18px;
`

const SignUp = styled.a`
  font-weight: bold;
  color: black;
  background-color: #f9f9f9;
  transform: translateY(0);
  transition: box-shadow 0.2s ease, transform 0.1s ease;
  height: 46px;
  min-width: 136px;
  padding: 14px 32px;
  border: none;
  font-size: 14px;
  font-weight: 600;
  line-height: 14px;
  letter-spacing: 1px;
  margin-bottom: -10px;
  cursor: pointer;
  text-align: center;
  border-radius: 6px;

  &: hover {
    background-color: rgb(193, 204, 214);
    opacity: 0.6;
    transition-timing-function: ease-in;
    transition: all 0.5s;
  }
`
const Description = styled.p`
  color: hsla(0, 0%, 95.3%, 1);
  font-size: 13px;
  margin-top: 30px;
  line-height: 1.5;
  letter-spacing: 1.5px;
`

const CTALogoTow = styled.img`
  max-width: 600px;
  margin-bottom: 20px;
  width: 100%;
  display: inline-block;
  vertical-align: bottom;
`
export default BigContainer1
