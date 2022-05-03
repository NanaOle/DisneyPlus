import React, { useState } from 'react'
import { BsInfo, BsCheckLg } from 'react-icons/bs'
import { Modal, makeStyles } from '@material-ui/core'
import '../App.css'

const useStyle = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    top: '40%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: theme.palette.background.paper,
    width: 390,
    height: 690,
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    overflow: 'auto',
  },
}))

function Bundle() {
  const [open, setopen] = useState(false)
  const classes = useStyle()

  return (
    <>
      <Modal open={open} onClose={(e) => setopen(false)}>
        <div id="total" className={classes.paper}>
          <h3
            style={{ marginLeft: '88%', marginTop: '20px' }}
            onClick={(e) => setopen(false)}
          >
            ❌
          </h3>
          <div
            style={{
              marginLeft: '16px',
              marginRight: '16px',
              fontFamily: 'sans-serif',
            }}
          >
            <h2 style={{ marginBottom: '40px' }}>Hulu, Disney+, and ESPN+</h2>
            <h4>What's Included in The Disney Bundle?</h4>
            <div id="forth">
              <BsCheckLg style={{ fontSize: '20px' }} />
              <span>
                {' '}
                Subscriptions to Disney+, ESPN+, and the Hulu plan of your
                choice for a discounted price. Available with Hulu
                (ad-supported) for $13.99/month or with Hulu (No Ads) for
                $19.99/month.
              </span>
            </div>
            <div id="forth">
              <BsCheckLg style={{ fontSize: '20px' }} />
              <span>
                Savings of $7.98/month compared to the regular price of each
                service.
              </span>
            </div>
            <div id="forth">
              <BsCheckLg style={{ fontSize: '20px' }} />
              <span>
                {' '}
                Enjoy all your favorite shows, movies, sports, and more using
                the Disney+, Hulu, and ESPN apps (or sites, for those on a
                browser). Download each app separately to access each service.
              </span>
            </div>
            <div id="forth">
              {' '}
              <BsCheckLg style={{ fontSize: '20px' }} />{' '}
              <span>Access select ESPN+ content via Hulu.</span>
            </div>
            <div id="forth">
              {' '}
              <BsCheckLg style={{ fontSize: '20px' }} />{' '}
              <span>Cancel anytime.</span>
            </div>
            <div>
              No free trial available. You must be 18 years or older to sign up.
            </div>
          </div>
        </div>
      </Modal>
      <div className="bundleHead">
        <div style={{ width: '190px', marginRight: '0px', lineHeight: '1.9' }}>
          <div>
            BUNDLE & SAVE{' '}
            <BsInfo
              onClick={(e) => setopen(true)}
              style={{
                border: '1px solid silver',
                borderRadius: '50%',
                fontSize: '18px',
                marginBottom: '-3px',
              }}
            />
          </div>
          <div>
            <img src="/images/dis.png" width="150px" alt="" />
          </div>
          <div>Includes Hulu (plan of your choice), Disney+, and ESPN+.</div>
        </div>
      </div>
    </>
  )
}

export default Bundle
