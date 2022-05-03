import React from 'react'

function Popular({ first }) {
  return (
    <div
      style={{
        display: 'flex',
        lineHeight: '0.6',
      }}
    >
      <div
        className="fat"
        style={{
          marginLeft: '5px',
          boxShadow: '15px 10px 10px -3px silver',
        }}
      >
        {first ? (
          <img
            src="/images/dis.png"
            width="111px"
            className="imagrfrompop"
            style={{ marginTop: '10px' }}
            alt=""
          />
        ) : (
          <h5 style={{ color: 'silver' }}>30 DAY FREE TRIAL</h5>
        )}

        <h4>Hulu</h4>
        <button
          className="pupularBtn"
          style={{
            backgroundColor: 'black',
            color: 'white',
            padding: '11px 22px',
            marginTop: '15px',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
        >
          SELECT
        </button>
      </div>
      <div
        className="fat"
        style={{
          boxShadow: '15px 10px 10px -3px silver',
          marginLeft: '22px',
          paddingRight: '4px',
        }}
      >
        {first ? (
          <img
            src="/images/dis.png"
            width="111px"
            className="imagrfrompop"
            style={{ marginTop: '10px' }}
            alt=""
          />
        ) : (
          <h5 style={{ color: 'silver' }}>30 DAY FREE TRIAL</h5>
        )}
        <h4>Hulu (No Ads)</h4>
        <button
          className="pupularBtn"
          style={{
            backgroundColor: 'black',
            marginTop: '15px',
            color: 'white',
            padding: '11px 22px',
            border: 'none',
            borderRadius: '4px',
            marginBottom: '20px',
            cursor: 'pointer',
          }}
        >
          SELECT
        </button>
      </div>
      <div
        className="fat"
        style={{ marginLeft: '22px', boxShadow: '15px 10px 10px -3px silver' }}
      >
        {first ? (
          <img
            src="/images/dis.png"
            width="111px"
            className="imagrfrompop"
            style={{ marginTop: '10px' }}
            alt=""
          />
        ) : (
          <h5 style={{ color: 'silver' }}>30 DAY FREE TRIAL</h5>
        )}

        {first ? (
          <h4>Hulu + Live TV</h4>
        ) : (
          <h4>
            Hulu (No Ads) <br /> <br /> + Live TV
          </h4>
        )}

        {first ? (
          <button
            className="pupularBtn"
            style={{
              backgroundColor: 'black',
              color: 'white',
              padding: '11px 22px',
              marginTop: '16px',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
            }}
          >
            SELECT
          </button>
        ) : (
          <button
            className="pupularBtn"
            style={{
              backgroundColor: 'black',
              color: 'white',
              padding: '11px 22px',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
            }}
          >
            SELECT
          </button>
        )}
      </div>
    </div>
  )
}

export default Popular
