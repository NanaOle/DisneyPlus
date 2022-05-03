import React, { useState } from 'react'
import { Modal, makeStyles } from '@material-ui/core'

const useStyle = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: theme.palette.background.paper,
    width: 390,
    height: 600,
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    overflow: 'auto',
  },
}))

function Intro() {
  const [open, setopen] = useState(false)
  const classes = useStyle()
  return (
    <div>
      <Modal open={open} onClose={(e) => setopen(false)}>
        <div id="total" className={classes.paper}>
          <h3 style={{ marginLeft: '90%' }} onClick={(e) => setopen(false)}>
            ❌
          </h3>
          <div
            style={{
              marginLeft: '16px',
              marginRight: '16px',
              fontFamily: 'sans-serif',
            }}
          >
            <p id="third">
              18+ only. Any free trials valid for new and eligible returning
              subscribers only. For personal and non-commercial use only. Live
              TV is available in the 50 United States and the District of
              Columbia only. Compatible device and high-speed, broadband
              Internet connection required. Multiple concurrent streams and HD
              content may require higher bandwidth. Streaming content may count
              against your data usage. Location data required to access content.
              Live TV may vary by subscription and location. Click here to check
              channel availability in your area. Programming subject to regional
              availability, blackouts, and device restrictions. Number of
              permitted concurrent streams will vary based on the terms of your
              subscription. Cloud DVR storage space is limited. Pricing,
              channels, features, content, and compatible devices subject to
              change. Please review our Terms of Use and Privacy Policy. For
              Live TV, now with Disney+ and ESPN+: if you already have existing
              subscription(s) with Disney+ and/or ESPN+, you may sign up without
              cancelling your existing subscription(s). Amount charged will be
              adjusted to account for those existing subscription(s) as long as
              they are maintained. Existing subscription(s) with Disney+ and/or
              ESPN+ will not be changed or replaced by Live TV. Access content
              from each service separately, and select ESPN+ content via Hulu.
              Certain account information provided to Disney+ and/or ESPN+ for
              activation and administration.
            </p>
          </div>
        </div>
      </Modal>
      <button onClick={(e) => setopen(true)} className="btnIntro">
        See details
      </button>
    </div>
  )
}

export default Intro
