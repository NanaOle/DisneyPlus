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

function Mark8({ first }) {
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
            <h1>No ads in streaming library</h1>
            <h3>
              Stream our library of shows and movies without ad interruptions.
            </h3>
            <p>
              Due to streaming rights, a few shows are not included in the Hulu
              (No Ads) plan and will instead play interruption-free with a short
              ad break before and after each episode. Visit the Hulu Help Center
              for a list of shows. Hulu (No Ads) + Live TV plan: Switch to this
              plan after sign-up to get ad-free experience of Hulu’s streaming
              library only; live and VOD content available through Live TV plan
              plays with ads. No free trial available.
            </p>
          </div>
        </div>
      </Modal>
      <div style={{ boxShadow: '0px 2px 2px  silver' }}>
        <div>
          <p>
            No ads in Hulu streaming library
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
                <BsCheckLg />
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

export default Mark8
