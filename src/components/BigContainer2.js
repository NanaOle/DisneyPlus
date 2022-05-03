import React from 'react'
import styled from 'styled-components'

function BigContainer2() {
  return (
    <>
      <Container2>
        <BigMessage>INCLUDED IN ALL PLANS</BigMessage>
        <SecondHeader>All The TV You Love</SecondHeader>
        <MainInfo>
          Stream full seasons of exclusive series, current-season episodes, hit
          movies, Hulu Originals, kids shows, and more.
        </MainInfo>
        <SiteImages>
          <NewDiv>
            <Mage1
              className="bimage0"
              src="/images/kid-movies.jpg"
              width="170px"
              alt=""
            />
            <Paragraph className="para1">Current Seasons</Paragraph>
          </NewDiv>
          <NewDiv>
            <Mage4
              className="bimage1"
              src="/images/Sonic.jpg"
              height="258px"
              width="170px"
              alt=""
            />
            <Paragraph2 className="para2">Add-on Premiums </Paragraph2>
          </NewDiv>
          <NewDiv>
            <Mage5
              className="bimage12"
              src="/images/trailer.jpg"
              width="170px"
              alt=""
            />
            <Paragraph3 className="para3">New & Classic Movies </Paragraph3>
          </NewDiv>
          <NewDiv>
            <Mage2
              className="bimage2"
              src="/images/crawlers-poster.png"
              width="170px"
              height="250px"
              alt=""
            />
            <Paragraph4 className="para4"> Hulu Original</Paragraph4>
          </NewDiv>
          <NewDiv>
            <Mage3
              className="bimage3"
              src="/images/little.png"
              width="170px"
              height="253px"
              alt=""
            />
            <Paragraph5 className="para5">Dooms Day Zombies </Paragraph5>
          </NewDiv>
          <NewDiv>
            <Mage6
              className="bimage4"
              src="/images/hulu-halloween.jpg"
              width="170px"
              height="250px"
              alt=""
            />
            <Paragraph6 className="para6"> scared Halloween </Paragraph6>
          </NewDiv>
        </SiteImages>
      </Container2>
    </>
  )
}

const Container2 = styled.section`
  background-color: black;
  text-align: center;
  padding: 50px 20px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  text-align: center;
`

const BigMessage = styled.p`
  color: #00ed82;
`

const SecondHeader = styled.h3`
  font-size: 32px;
  font-weight: 800;
  line-height: 44px;
  margin-bottom: 16px;
  margin-top: 0;
`

const MainInfo = styled.p`
  margin-top: 0;
  font-size: 16px;
  line-height: 24px;
`

const SiteImages = styled.div`
  display: flex;
  flex-direction: row !important;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 50px;
`

const NewDiv = styled.div`
  margin: 2px 3px 3px 3px;
`

const Mage1 = styled.img`
  cursor: pointer;

  &:hover {
    transform: scale(1.08);
    opacity: 1;
    transition: transform 450ms;
  }
`
const Mage2 = styled.img`
  cursor: pointer;
  &:hover {
    transform: scale(1.08);
    opacity: 1;
    transition: transform 450ms;
  }
`
const Mage3 = styled.img`
  cursor: pointer;
  &:hover {
    transform: scale(1.08);
    opacity: 1;
    transition: transform 450ms;
  }
`
const Mage4 = styled.img`
  cursor: pointer;
  &:hover {
    transform: scale(1.08);
    opacity: 1;
    transition: transform 450ms;
  }
`
const Mage5 = styled.img`
  cursor: pointer;
  &:hover {
    transform: scale(1.08);
    opacity: 1;
    transition: transform 450ms;
  }
`
const Mage6 = styled.img`
  cursor: pointer;
  &:hover {
    transform: scale(1.08);
    opacity: 1;
    transition: transform 450ms;
  }
`

const Paragraph = styled.h4`
  position: sticky;
  position: -webkit-sticky;
  color: aquamarine;
`

const Paragraph2 = styled.h4`
  position: sticky;
  position: -webkit-sticky;
  margin-bottom: 250px;
  color: aquamarine;
`

const Paragraph3 = styled.h4`
  position: sticky;
  position: -webkit-sticky;
  margin-bottom: 250px;
  color: aquamarine;
`

const Paragraph4 = styled.h4`
  position: sticky;
  position: -webkit-sticky;
  margin-bottom: 250px;
  color: aquamarine;
`

const Paragraph5 = styled.h4`
  position: sticky;
  position: -webkit-sticky;
  margin-bottom: 250px;
  color: aquamarine;
`

const Paragraph6 = styled.h4`
  color: aquamarine;
  position: sticky;
  position: -webkit-sticky;
  margin-bottom: 250px;
`

export default BigContainer2
