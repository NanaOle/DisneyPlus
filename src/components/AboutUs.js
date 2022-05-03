import React, { useState } from 'react'
import { BsChevronDown, BsChevronUp } from 'react-icons/bs'
import '../Br.css'

function AboutUs() {
  const [turn, setturn] = useState(false)
  return (
    <div>
      <div>
        {!turn ? (
          <div
            style={{
              display: 'flex',
              width: '100%',
              justifyContent: 'space-between',
            }}
            onClick={() => setturn(true)}
          >
            <span style={{ marginLeft: '40px', marginTop: '30px' }}>
              ABOUT US{' '}
            </span>
            <span style={{ cursor: 'pointer', marginTop: '30px' }}>
              <BsChevronDown style={{ marginRight: '40px' }} />
            </span>
          </div>
        ) : (
          <div
            style={{
              display: 'flex',
              width: '100%',
              justifyContent: 'space-between',
            }}
            onClick={() => setturn(false)}
          >
            <span style={{ marginLeft: '40px', marginTop: '30px' }}>
              ABOUT US{' '}
            </span>
            <span style={{ cursor: 'pointer', marginTop: '30px' }}>
              <BsChevronUp style={{ marginRight: '40px' }} />
            </span>
          </div>
        )}
      </div>
      {turn ? (
        <div
          style={{
            lineHeight: '1',
            textAlign: 'start',
            marginLeft: '18px',
            cursor: 'pointer',
          }}
        >
          <p>Shop Hulu</p>
          <p>Press</p>
          <p>Jobs</p>
          <p>Contact</p>
        </div>
      ) : (
        ''
      )}
    </div>
  )
}

export default AboutUs
