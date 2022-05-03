import React, { useState } from 'react'
import { BsToggleOff, BsToggleOn } from 'react-icons/bs'
import styled from 'styled-components'

import Bundle from './Bundle'
import Popular from './Popular'
import Review from './Review'
import Mark1 from './Mark1'
import Mark2 from './Mark2'
import Mark3 from './Mark3'
import Mark4 from './Mark4'
import Mark5 from './Mark5'
import Mark6 from './Mark6'
import Mark7 from './Mark7'
import Mark8 from './Mark8'
import Mark9 from './Mark9'
import Mark10 from './Mark10'
import Mark11 from './Mark11'
import Mark12 from './Mark12'
import Mark13 from './Mark13'
import Mark14 from './Mark14'
import Mark15 from './Mark15'
import LastMan from './LastMan '

function BigContainer5() {
  const [first, setfirst] = useState(false)

  return (
    <>
      <Container5 className="bigger">
        <div className="bigpicture">
          <One>
            <h1 className="select" style={{ fontSize: '30px' }}>
              Select Your Plan
            </h1>
            <p className="hidden" style={{ width: '100%', fontSize: '16px' }}>
              No hidden fees, equipment rentals, or installation appointments.
            </p>
            <h3 className="switch" style={{ marginBottom: '40px' }}>
              Switch plans or cancel anytime.^^
            </h3>
            <hr style={{ color: 'rgb(216, 213, 213)' }} />
          </One>
          <div className="twoThree">
            <div>
              <Two className="twor">
                <Bundle />
                <div
                  className="tog"
                  style={{
                    marginLeft: '270px',
                    marginTop: '-100px',
                    marginBottom: '60px',
                  }}
                >
                  {first ? (
                    <BsToggleOn
                      className="tg1"
                      onClick={(e) => setfirst(false)}
                      style={{
                        fontSize: '75px',
                        width: '90px',
                        cursor: 'pointer',
                      }}
                    />
                  ) : (
                    <BsToggleOff
                      className="tg1"
                      onClick={(e) => setfirst(true)}
                      style={{
                        fontSize: '75px',
                        width: '90px',
                        cursor: 'pointer',
                      }}
                    />
                  )}
                </div>
              </Two>
              <hr className="hri1" style={{ color: 'rgb(216, 213, 213)' }} />
            </div>
            <Three>
              <button
                className="butintheboot"
                style={{
                  marginLeft: '-250px',
                  border: 'none',
                  fontSize: '10px',
                  borderRadius: '12px',
                  backgroundColor: 'rgb(110, 108, 108)',
                  padding: '8px 12px ',
                  marginTop: '20px',
                  color: 'white',
                }}
              >
                MOST POPULAR{' '}
              </button>
              <Popular first={first} />
              <hr className="hri1" />
            </Three>
          </div>
          <Four>
            <div
              className="scr"
              style={{
                marginTop: '-15px',
                height: '460px',
                overflow: 'auto',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <Mark1 first={first} />
              <Mark2 first={first} />
              <Mark3 first={first} />
              <Mark4 first={first} />
              <Mark5 first={first} />
              <Mark6 first={first} />
              <Mark7 first={first} />
              <Mark8 first={first} />
              <Mark9 first={first} />
              <Mark10 first={first} />
              <Mark11 first={first} />
              <Mark12 first={first} />
              <Mark13 first={first} />
              <Mark14 first={first} />
              <Mark15 first={first} />
              <br />
              <DLink>
                <Review />
              </DLink>
              <LastMan />
            </div>
          </Four>
        </div>
      </Container5>
    </>
  )
}

const Container5 = styled.section`
  background-color: white;
  color: black;
  text-align: center;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  text-align: center;
  height: 150vh;
  font-family: 'Graphik', Helvetica, Arial, sans-serif;
  padding: 1px;
`

const One = styled.div`
  padding-top: 10px;
  margin-bottom: 40px;
`

const Two = styled.div``

const Three = styled.div``

const Four = styled.div``

const DLink = styled.div``

export default BigContainer5
