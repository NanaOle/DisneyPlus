import React, { useState } from 'react'
import { BsCheckLg, BsInfo } from 'react-icons/bs'
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

function Turn6({ turn }) {
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
            <h1>Enhanced Cloud DVR</h1>
            <h4>Upgrade Cloud DVR to 200 hours</h4>
            <h4>- Fast-forward through commercials</h4>
            <h4>- No limit on simultaneous recordings</h4>
            <h4>
              - Stream your recordings at home or on the go on supported devices
            </h4>
          </div>
        </div>
      </Modal>
      <div>
        {turn ? (
          <div>
            <div>
              <div style={{ boxShadow: '0px 2px 2px  silver' }}>
                <div>
                  <p>
                    Enhanced Cloud DVR{' '}
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
                    <div>
                      <BsCheckLg />
                    </div>
                  </div>
                  <div>
                    <div>
                      <BsCheckLg />
                    </div>
                  </div>
                  <div>
                    <div>
                      <BsCheckLg />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          ''
        )}
      </div>
    </>
  )
}

export default Turn6
