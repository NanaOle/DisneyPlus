import React from 'react'
import { BsCheckLg } from 'react-icons/bs'

function Turn2({ turn }) {
  return (
    <>
      <div>
        {turn ? (
          <div>
            <div>
              <div style={{ boxShadow: '0px 2px 2px  silver' }}>
                <div>
                  <p>CINEMAX®</p>
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

export default Turn2
