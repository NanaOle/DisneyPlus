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

function Mark6({ first }) {
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
              <h1>Up to 6 user profiles</h1>
              <p>
                Now up to six members of your household can have separate
                profiles so that favorites and recommendations are unique to
                each viewer.
              </p>
            </div>
          </div>
        </div>
      </Modal>
      <div style={{ boxShadow: '0px 2px 2px  silver' }}>
        <div>
          <p>
            Endless entertainment with Disney+, ad-free
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

export default Mark6
