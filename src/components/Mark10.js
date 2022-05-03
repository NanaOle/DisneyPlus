import React, { useState } from 'react'
import { BsInfo, BsCheckLg, BsDash } from 'react-icons/bs'
import { Modal, makeStyles } from '@material-ui/core'

const useStyle = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    top: '40%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: theme.palette.background.paper,
    width: 390,
    height: 690,
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    overflow: 'auto',
  },
}))

function Mark10({ first }) {
  const [open, setopen] = useState(false)
  const classes = useStyle()
  return (
    <>
      <Modal open={open} onClose={(e) => setopen(false)}>
        <div id="total" className={classes.paper}>
          <h3
            style={{ marginLeft: '88%', marginTop: '20px' }}
            onClick={(e) => setopen(false)}
          >
            ❌
          </h3>
          <div
            style={{
              marginLeft: '16px',
              marginRight: '16px',
              fontFamily: 'sans-serif',
            }}
          >
            <h1>Live TV with 75+ top channels. No cable required.</h1>
            <h3>
              - Live sports including the NCAA, NBA, NHL, NFL, the English
              Premier League, and more.
            </h3>
            <h3>
              - Breaking news on CNN, Fox News, and MSNBC, with local news
              channels in many cities.
            </h3>
            <h3>
              - Live entertainment on ABC, CBS, FOX, NBC and more, including
              local channels and events like the Oscars®.
            </h3>
          </div>
        </div>
      </Modal>
      <div style={{ boxShadow: '0px 2px 2px  silver' }}>
        <div>
          <p>
            Live TV with 75+ top channels. No cable required.{' '}
            <BsInfo
              onClick={(e) => setopen(true)}
              style={{
                cursor: 'pointer',
                border: '1px solid silver',
                borderRadius: '50%',
                fontSize: '18px',
                marginBottom: '-3px',
              }}
            />
          </p>
        </div>
        <div
          style={{
            display: 'flex',
            width: '100%',
            justifyContent: 'space-evenly',
          }}
        >
          <div>
            {!first ? (
              <div>
                <BsDash />
              </div>
            ) : (
              <div>
                <p>
                  <BsCheckLg />
                </p>
              </div>
            )}
          </div>
          <div>
            {!first ? (
              <div>
                <BsDash />
              </div>
            ) : (
              <div>
                <p>
                  <BsCheckLg />
                </p>
              </div>
            )}
          </div>
          <div>
            {!first ? (
              <div>
                <p>
                  <BsCheckLg />
                </p>
              </div>
            ) : (
              <div>
                <p>
                  {' '}
                  <BsCheckLg />
                </p>
              </div>
            )}
          </div>
        </div>
      </div>{' '}
    </>
  )
}

export default Mark10
