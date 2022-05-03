import React from 'react'
import { BsCheckLg } from 'react-icons/bs'

function Mark4({ first }) {
  return (
    <>
      <div style={{ boxShadow: '0px 2px 2px  silver' }}>
        <div>
          <p>Access to award-winning Hulu Originals</p>
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
      </div>
    </>
  )
}

export default Mark4
