import React, { useState } from 'react'
import styled from 'styled-components'

import {
  Modal,
  makeStyles,
  FormControl,
  Input,
  InputLabel,
  FormHelperText,
  Button,
} from '@material-ui/core'

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
  },
}))

function BigContainer3() {
  const classes = useStyle()
  const [open, setopen] = useState(false)
  const [input, setinput] = useState('')

  return (
    <>
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
            <p id="first">Channels in your area</p>
            <p id="second">
              Enter your home ZIP code for channels available in your area.
            </p>
            <div>
              <form>
                <FormControl className="fix">
                  <InputLabel htmlFor="my-input">Enter Zip Code</InputLabel>
                  <Input
                    id="my-input"
                    type="text"
                    onChange={(e) => setinput(e.target.value)}
                    value={input}
                    aria-describedby="my-helper-text"
                  />
                  <FormHelperText id="my-helper-text">
                    VIEW CHANNELS IN YOUR AREA
                  </FormHelperText>
                </FormControl>
                <Button
                  disabled={!input}
                  className="newBtn"
                  color="primary"
                  variant="contained"
                  type="submit"
                >
                  SUBMIT
                </Button>
              </form>
            </div>
            <p id="third">
              Live TV is available for those live local, regional, and national
              channels available in your area, which are subject to change.
              Select channels may offer only on demand content. Certain channels
              or content may not be available in all locations or on all
              devices.
            </p>
          </div>
        </div>
      </Modal>

      <Container3 className="bthree">
        <Info1 className="bhulu">
          HULU + LIVE TV, NOW WITH DISNEY+ AND ESPN+
        </Info1>
        <Info2 className="blive">Live TV Makes It Better</Info2>
        <Info3 className="bmake">
          Make the switch from cable. Get 75+ top channels on Hulu with your
          favorite live sports, news, and events - plus the entire Hulu
          streaming library. Access endless entertainment with Disney+ and live
          sports with ESPN+. All three for a new price of $69.99/month.
        </Info3>
        <Info4 className="bonly">
          18+ only. Regional restrictions, blackouts and Live TV terms apply.
          Access content from each service separately and access ESPN+ content
          via Hulu. Location data required to watch certain content. Offer valid
          for eligible subscribers only.{' '}
        </Info4>
        <Info5 onClick={(e) => setopen(true)}>
          VIEW CHANNELS IN YOUR AREA →
        </Info5>
        <Info6 className="object">🠟</Info6>
      </Container3>
    </>
  )
}

const Container3 = styled.section`
  background-color: black;
  text-align: center;
  padding: 50px 20px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  text-align: center;
  height: 73vh;
  background-color: #151516;
  font-family: 'Graphik', Helvetica, Arial, sans-serif;
  padding: 1px;
`

const Info1 = styled.p`
  margin-top: 50px;
  font-size: 13px;
  letter-spacing: 1px;
  text-transform: uppercase;
  font-weight: 600;
  line-height: 14px;
  letter-spacing: 0.857143px;
  color: #00ed82;
`
const Info2 = styled.p`
  font-size: 34px;
  font-weight: 800;
  letter-spacing: -0.27px;
  line-height: 40px;
  margin: 16px 3% 0;
`

const Info3 = styled.p`
  font-size: 17px;
  font-weight: 400;
  line-height: 26px;
  margin: 12px 5% 0;
`

const Info4 = styled.p`
  font-size: 11px;
  line-height: 18px;
  text-align: center;
  color: #fff;
  margin: 8px 5% 0 5%;
`

const Info5 = styled.button`
  text-decoration: underline;
  opacity: 0.8;
  color: #fff;
  font-size: 14px;
  line-height: 15px;
  margin-top: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background: none;
  border: none;
  padding: 0;
  margin: 18px auto 0 auto;
  font-family: 'Graphik', Helvetica, Arial, sans-serif;
`

const Info6 = styled.p`
  margin-left: 50%;
  color: white;
  cursor: pointer;
  width: 18px;
  padding: 0;
  border: none;
  text-align: center;
  justify-content: center;
  display: flex;
`

export default BigContainer3
