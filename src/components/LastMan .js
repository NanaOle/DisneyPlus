import React from 'react'
import AboutUs from './AboutUs'
import Browser from './Browser'
import HelpUs from './HelpUs'
import { BsInstagram, BsTwitter, BsFacebook, BsYoutube } from 'react-icons/bs'
import '../Br.css'

function LastMan() {
  return (
    <div
      style={{ marginTop: '10px', backgroundColor: '#EBEDF2', lineHeight: '5' }}
      className="lastBig"
    >
      <div style={{ cursor: 'pointer' }}>
        <Browser />
      </div>
      <div style={{ cursor: 'pointer' }}>
        <HelpUs />
      </div>
      <div style={{ cursor: 'pointer' }}>
        <AboutUs />
      </div>
      <div
        className="kl"
        style={{
          color: '#656B7B',
          fontSize: '25px',
          marginLeft: '-200px',
          cursor: 'pointer',
        }}
      >
        <BsFacebook style={{ marginRight: '18px' }} />
        <BsYoutube style={{ marginRight: '18px' }} />
        <BsTwitter style={{ marginRight: '18px' }} />
        <BsInstagram />
      </div>
      <div
        className="dis"
        style={{
          lineHeight: '0.4',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          cursor: 'pointer',
        }}
      >
        <div>
          <p className="bl">About Ads</p>
          <p className="bl">Terms of Use</p>
          <p className="bl">Privacy Policy</p>
          <p className="bl">Personal Information</p>
        </div>
        <div>
          <p className="bl"> Privacy Rights</p>
          <p className="bl"> Parental Guidelines</p>
          <p className="bl">Sitemap</p>
          <p className="bl">© 2022 Hulu, LLC</p>
        </div>
      </div>
    </div>
  )
}

export default LastMan
