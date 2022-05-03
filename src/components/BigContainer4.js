import React, { useState } from 'react'
import styled from 'styled-components'
import Intro from './Intro'

function BigContainer4() {
  const [change, setchange] = useState(false)

  return (
    <>
      <Container4>
        <FirstCompo>
          <Let1
            style={{ borderRadius: '5px', border: '1px solid white' }}
            onClick={() => setchange(true)}
            id="sp"
          >
            LIVE SPOTS
          </Let1>
          <Let3
            id="br"
            onClick={() => setchange(false)}
            style={{ borderRadius: '5px', border: '1px solid white' }}
          >
            BREAKING NEWS
          </Let3>
          <Intro />
        </FirstCompo>
        {change === true ? (
          <SecondCompo className="secondt">
            <div className="move">
              <Cap1>Live Sports</Cap1>
              <Cap2>
                Catch your games at home or on the go. Stream live games from
                major college and pro leagues including the NCAA®, NBA, NHL,
                NFL, and more.
              </Cap2>
              <Cap3>
                <Im1
                  src="/images/images-removebg-preview.png"
                  width="55px"
                  height="55px"
                  alt=""
                />
                <Im2
                  src="/images/app-removebg-preview.png"
                  height="55px"
                  width="55px"
                  alt=""
                />
                <Im3
                  src="/images/yankees-logo-removebg-preview.png"
                  width="55px"
                  height="55px"
                  alt=""
                />
                <Im4
                  src="/images/sports-logo-removebg-preview.png"
                  width="55px"
                  height="55px"
                  alt=""
                />
              </Cap3>
              <Cap4>
                <span className="spantag">
                  Live TV plan required. Regional restrictions, blackouts and
                  additional terms apply.
                </span>
                <div className="banner--fadeButton" />
              </Cap4>
            </div>

            <div>
              <Cap5>
                <Cimage
                  id="ima3"
                  className="kmage"
                  src="/images/messi.jpg"
                  alt=""
                />
              </Cap5>
            </div>
          </SecondCompo>
        ) : (
          <ForthCompo className="secondt">
            <div className="move">
              <Cap1>Breaking News</Cap1>
              <Cap2>
                Keep pace with what's going on locally and globally with trusted
                opinions from all the top news networks.
              </Cap2>
              <Cap3>
                <Em1
                  src="/images/nbc-removebg-preview.png"
                  width="55px"
                  height="55px"
                  alt=""
                />
                <Em2
                  src="/images/joy-removebg-preview.png"
                  width="55px"
                  height="55px"
                  alt=""
                />
                <Em3
                  src="/images/images-removebg.png"
                  width="55px"
                  height="55px"
                  alt=""
                />
                <Em4
                  src="/images/adom-removebg-preview.png"
                  width="55px"
                  height="55px"
                  alt=""
                />
              </Cap3>
              <Cap4>
                <span className="spantag">
                  Live TV plan required. Regional restrictions, blackouts and
                  additional terms apply.
                </span>
                <div className="banner--fadeButton" />
              </Cap4>
            </div>
            <div>
              <Cap5>
                <Cimage
                  className="kmage"
                  id="ima2"
                  src="/images/c2.jpg"
                  alt=""
                />
              </Cap5>
            </div>
          </ForthCompo>
        )}
      </Container4>
    </>
  )
}

const Container4 = styled.section`
  text-align: center;
  padding: 50px 20px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  text-align: center;
  height: 110vh;
  font-family: 'Graphik', Helvetica, Arial, sans-serif;
  padding: 1px;
`

const FirstCompo = styled.div`
  padding-top: 30px;
  padding-bottom: 10px;
  background-color: tansparent;
  margin: -1px;
`
const Let1 = styled.a`
  padding: 18px 25px;
  cursor: pointer;
  margin-right: 10px;
  letter-spacing: -0.3px;
  font-weight: bold;
  &:hover {
    background-color: white !important;
    color: black !important;
    border-radius: 4px;
    transition-timing-function: ease-in;
    transition: all 0.9s;
  }
`

const Let3 = styled.a`
  padding: 18px 25px;
  cursor: pointer;
  margin-left: 10px;
  letter-spacing: -0.3px;
  font-weight: bold;
  &:hover {
    background-color: white !important;
    color: black !important;
    border-radius: 4px;
    transition-timing-function: ease-in;
    transition: all 0.9s;
  }
`

const SecondCompo = styled.div`
  height: 100%;
  position: absolute;
  top: 300;
  left: 0;
  right: 0;
  z-index: -1;
  background-position: top;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url('/images/th.jfif');
`

const ForthCompo = styled.div`
  height: 100%;
  position: absolute;
  top: 300;
  left: 0;
  right: 0;
  z-index: -1;
  background-position: top;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url('/images/cnn.jpg');
`
const Cap1 = styled.div`
  font-weight: bold;
  font-size: 36px;
  line-height: 40px;
  letter-spacing: -0.28125px;
  color: #fff;
  margin-top: 150px;
  text-align: center;
`
const Cap2 = styled.div`
  color: #fff;
  max-width: 550px;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  padding-left: 20px;
  padding-right: 20px;
  margin-top: 4px;
`
const Cap3 = styled.div`
  display: flex;
  justify-content: space-evenly;
  height: 53px;
  flex-wrap: wrap;
  width: 350px;
  margin: 47px auto 0 auto;
`
const Cap4 = styled.div`
  max-width: 60%;
  margin-top: 20px;
  margin-left: 80px;
  font-size: 13px;
  line-height: 18px;
  color: #ffffff;
  opacity: 0.6;
  text-align: center;
`
const Cap5 = styled.div``

const Cimage = styled.img``

const Im1 = styled.img`
  background-color: white;
  border-radius: 50%;
`
const Im2 = styled.img`
  background-color: white;
  border-radius: 50%;
`
const Im3 = styled.img`
  background-color: white;
  border-radius: 50%;
`
const Im4 = styled.img`
  background-color: white;
  border-radius: 50%;
`

const Em1 = styled.img`
  background-color: white;
  border-radius: 50%;
`
const Em2 = styled.img`
  background-color: white;
  border-radius: 50%;
`
const Em3 = styled.img`
  background-color: white;
  border-radius: 50%;
`
const Em4 = styled.img`
  background-color: white;
  border-radius: 50%;
`

export default BigContainer4
