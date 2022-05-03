import React, { useState } from 'react'
import { BsChevronDown, BsChevronUp } from 'react-icons/bs'
import '../Br.css'

function Browser() {
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
              BROWSER{' '}
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
              BROWSER{' '}
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
          <div>
            <p> Streaming Library</p>
            <p>Live TV</p>
            <p>Live News</p>
            <p>Live Sports</p>
          </div>
          <div>
            <p>TV Shows</p>
            <p>Movies</p>
            <p>Originals</p>
            <p>Networks</p>
            <p>Kids</p>
            <p>Student Discount</p>
          </div>
          <div>
            <p>FX</p>
            <p>HBO Max™</p>
            <p>Cinemax</p>
            <p>Showtime</p>
          </div>
          <div>
            <p>STARZ</p>
            <p>Hulu, Disney+, and ESPN+</p>
            <p>Hulu (No Ads), Disney+, and ESPN+</p>
          </div>
        </div>
      ) : (
        ''
      )}
    </div>
  )
}

export default Browser
