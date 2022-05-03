import React, { useState } from 'react'
import { BsChevronDown, BsChevronUp } from 'react-icons/bs'
import '../Br.css'

function HelpUs() {
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
            <span style={{ marginLeft: '40px', marginTop: '30px' }}>HELP </span>
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
            <span style={{ marginLeft: '40px', marginTop: '30px' }}>HELP </span>
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
          <p>Account & Billing</p>
          <p>Plans & Pricing</p>
          <p>Supported Devices</p>
          <p>Accessibility</p>
        </div>
      ) : (
        ''
      )}
    </div>
  )
}

export default HelpUs
