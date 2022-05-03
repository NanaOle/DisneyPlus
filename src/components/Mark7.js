import React, { useState } from 'react'
import { BsInfo, BsCheckLg } from 'react-icons/bs'
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

function Mark7({ first }) {
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
            <div>
              <h1>Live sports with ESPN+, now on Hulu</h1>
              <p>
                Thousands of live events from UFC, MLB, international soccer,
                and more. Plus, get the complete 30 for 30 library, premium
                articles & fantasy tools, and exclusive original series from
                stars like Peyton Manning, Kevin Durant, and LeBron James. Watch
                in the ESPN+ and Hulu apps.
              </p>
            </div>
          </div>
        </div>
      </Modal>
      <div style={{ boxShadow: '0px 2px 2px  silver' }}>
        <div>
          <p>
            Live sports with ESPN+, now on Hulu
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

export default Mark7
