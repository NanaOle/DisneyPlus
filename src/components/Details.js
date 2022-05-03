import React from 'react'
import styled from 'styled-components'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { db } from '../firebase'
import { doc, getDoc } from 'firebase/firestore'

function Details() {
  const { id } = useParams()
  const [detailData, setDetailsData] = useState({})

  useEffect(() => {
    const docRef = doc(db, 'movies', id)
    const docSnap = getDoc(docRef)
      .then((doc) => {
        if (doc.exists()) {
          //   console.log('Document data:', doc.data())
          setDetailsData(doc.data())
          console.log(doc.data().backgroundImg)
        } else {
          // doc.data() will be undefined in this case
          console.log('No such document!')
        }
      })
      .catch((err) => {
        console.log(' error getting document ', err)
      })
  }, [])

  return (
    <Container>
      <Background>
        <img src={detailData.backgroundImg} alt={detailData.title} />
      </Background>

      <ImageTitle>
        <img src={detailData.titleImg} alt={detailData.title} />
      </ImageTitle>
      <ContentMeta>
        <Controls>
          <Player>
            <img src="/images/play-icon-black.png" alt="" />
            <span>play</span>
          </Player>
          <Trailer>
            <img src="/images/play-icon-white.png" alt="" />
            <span>Trailer</span>
          </Trailer>
          <AddList>
            <span />
            <span />
          </AddList>
          <GroupWatch>
            <div>
              <img src="/images/group-icon.png" alt="" />
            </div>
          </GroupWatch>
        </Controls>
        <SubTitle> {detailData.subTitle} </SubTitle>
        <Description> {detailData.description} </Description>
      </ContentMeta>
    </Container>
  )
}

const Container = styled.div`
  position: relative;
  min-height: calc(100vh - 250px);
  overflow-y: hidden !important ;
  overflow-x: hidden;
  display: block;
  top: 72px;
  padding: 0 calc(3.5vw - 5px);

  @media only screen and (min-width: 768px) {
    top: 0px;
  }
`

const Background = styled.div`
  top: 0px;
  z-index: -1;
  opacity: 0.7;
  position: fixed;
  left: 0px;
  right: 0px;

  img {
    width: 100vw;
    height: 100vh;

    @media (max-width: 768px) {
      width: initial;
    }
  }
`

const ImageTitle = styled.div`
  display: flex;
  align-items: flex-end;
  -wibkit-box-pack: satrt;
  justify-content: flex-start;
  margin: 0 auto;
  height: 30vw;
  min-height: 170px;
  padding-bottom: 24px;
  width: 100%;

  img {
    max-width: 600px;
    min-width: 200px;
    width: 35vw;
  }

  @media only screen and (min-width: 768px) {
    margin-top: -40px !important;
  }
`

const ContentMeta = styled.div`
  max-width: 874px;
`

const Controls = styled.div`
  align-items: center;
  display: flex;
  flex-flow: row nowrap;
  margin: 24px 0px;
  min-height: 56px;
`

const Player = styled.button`
  font-size: 15px;
  margin: 0px 22px 0px 0px;
  padding: 0px 24px;
  height: 56px;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  letter-spacing: 1.8px;
  text-transform: uppercase;
  text-align: center;
  background: rgb(249, 249, 249);
  border: none;
  color: rgb(0, 0, 0);

  img {
    width: 32px;
  }

  &:hover {
    background: rgb(198, 198, 198);
  }

  @media (max-width: 768px) {
    height: 45px;
    padding: 0px 12px;
    font-size: 12px;
    margin: 0px 10px 0px 0px;

    img {
      width: 25px;
    }
  }
`

const Trailer = styled(Player)`
  background: rgb(0, 0, 0, 0.3);
  border: 1px solid rgb(249, 249, 249);
  color: rgb(249, 249, 249);
`

const AddList = styled.div`
  margin-right: 16px;
  height: 44px;
  width: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background: rgb(0, 0, 0, 0.6);
  border: 2px solid white;
  cursor: pointer;

  span {
    background-color: rgb(249, 249, 249);
    display: inline-block;

    &:first-child {
      height: 2px;
      transform: translate(1px, 0px) rotate(0deg);
      width: 16px;
    }

    &:nth-child(2) {
      height: 16px;
      width: 2px;
      transform: translate(-8px) rotate(0deg);
    }
  }
`

const GroupWatch = styled.div`
  margin-right: 16px;
  height: 44px;
  width: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background: rgb(0, 0, 0, 0.6);
  border: 2px solid white;
  cursor: pointer;
`

const SubTitle = styled.div`
color: rgb(249,249,249)
font-size: 15px;
min-height: 20px;


@media(max-width: 268px ) {
    font-size: 12px;
}

`

const Description = styled.div`
  line-height: 1.4;
  font-size: 20px;
  padding: 16px 0px;
  color: rgb(249, 249, 249);
  @media (max-width: 268px) {
    font-size: 14px;
  }
`

export default Details
