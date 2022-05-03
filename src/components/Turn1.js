import React from 'react'
import { BsCheckLg } from 'react-icons/bs'

function Turn1({ turn }) {
  return (
    <>
      <div>
        {turn ? (
          <div>
            <h1>Available Add-ons</h1>
            <p>Add-ons available at an additional cost.</p>
            <p>Add them up after you sign up for Hulu.</p>
            <div>
              <hr />
              <div style={{ boxShadow: '0px 2px 2px  silver' }}>
                <div>
                  <p>HBO Max™</p>
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

export default Turn1
