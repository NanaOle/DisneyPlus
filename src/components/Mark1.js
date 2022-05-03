import React from 'react'

function Mark1({ first }) {
  return (
    <>
      <div style={{ boxShadow: '0px 2px 2px  silver' }}>
        <div>
          {!first ? (
            <div>
              <p>Monthly price</p>
            </div>
          ) : (
            <div>
              <p> Monthly price for all three services. Save up to $7.98/mo*</p>
            </div>
          )}
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
                <p>$6.99/mo</p>
              </div>
            ) : (
              <div>
                <p>
                  {' '}
                  <small
                    style={{
                      textDecoration: 'line-through',
                      color: 'silver',
                    }}
                  >
                    {' '}
                    $21.97/mo{' '}
                  </small>{' '}
                </p>
                <p>$13.99/mo</p>
              </div>
            )}
          </div>
          <div>
            {!first ? (
              <div>
                <p>$12.99/mo</p>
              </div>
            ) : (
              <div>
                <p>
                  <small
                    style={{
                      textDecoration: 'line-through',
                      color: 'silver',
                    }}
                  >
                    $27.97/mo
                  </small>
                </p>
                <p>$19.99/mo</p>
              </div>
            )}
          </div>
          <div>
            {!first ? (
              <div>
                <p>$69.99/mo</p>
              </div>
            ) : (
              <div>
                <p>$75.99/mo</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default Mark1
