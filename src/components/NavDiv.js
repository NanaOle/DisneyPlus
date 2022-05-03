import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import {
  auth,
  logInWithEmailAndPassword,
  signInWithGoogle,
  logout,
} from '../firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
import styled from 'styled-components'
import { Modal, makeStyles } from '@material-ui/core'
import '../Login.css'

const useStyle = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    top: '47%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: theme.palette.background.paper,
    width: 390,
    height: 510,
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    overflow: 'auto',
  },
}))

function NavDiv() {
  const [open, setopen] = useState(false)
  const classes = useStyle()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [user, loading, error] = useAuthState(auth)
  const navigate = useNavigate()

  useEffect(() => {
    if (loading) {
      // maybe trigger a loading screen
      return
    }
    if (user) navigate('/dashboard')
  }, [user, loading])

  const clickBtn = () => {
    signInWithGoogle()
    setopen(false)
  }

  const emailsign = () => {
    setEmail('')
    setPassword('')
    setopen(false)
    logInWithEmailAndPassword(email, password)
  }

  return (
    <div>
      <Modal open={open} onClose={(e) => setopen(false)}>
        <div id="total" className={classes.paper}>
          <h3
            style={{ marginLeft: '88%', marginTop: '20px' }}
            onClick={(e) => setopen(false)}
            className="ex"
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
            <div className="login">
              <div className="login__container">
                <input
                  type="text"
                  className="login__textBox"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="E-mail Address"
                />
                <input
                  type="password"
                  className="login__textBox"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                />
                <button className="login__btn" onClick={emailsign}>
                  Login
                </button>
                <button className="login__btn login__google" onClick={clickBtn}>
                  Login with Google
                </button>
                <div>
                  <Link
                    style={{ color: 'blue' }}
                    onClick={() => setopen(false)}
                    to="/reset"
                  >
                    Forgot Password
                  </Link>
                </div>
                <div>
                  Don't have an account?{' '}
                  <Link
                    style={{ color: 'blue' }}
                    onClick={() => setopen(false)}
                    to="/register"
                  >
                    Register
                  </Link>{' '}
                  now.
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>

      {!user ? (
        <Navbar>
          <div style={{ marginTop: '-13px' }}>
            <img src="images/viewers-disney.png" width="170px" alt="" />
          </div>
          <div>
            <h2
              onClick={(e) => setopen(true)}
              className="logbtn"
              style={{
                marginBottom: '10px',
                paddingLeft: '15px',
                letterSpacing: '1px',
                paddingRight: '15px',
                paddingBottom: '8px',
                paddingTop: '8px',
                fontSize: '15px',
                marginRight: '22px',
                borderRadius: '4px',
                border: '1px solid white',
                color: 'white',
                backgroundColor: 'black',
                cursor: 'pointer',
              }}
            >
              Login
            </h2>
          </div>
        </Navbar>
      ) : (
        <>
          <Navbar>
            <div style={{ marginTop: '-13px' }}>
              <img src="images/viewers-disney.png" width="170px" alt="" />
            </div>
            <NavMenu>
              <a href="/dashboard">
                <img src="/images/home-icon.svg" alt="" />
                <span>HOME</span>
              </a>
              <a href="/dashboard">
                <img src="/images/search-icon.svg" alt="" />
                <span>SEARCH</span>
              </a>
              <a href="/dashboard">
                <img src="/images/watchlist-icon.svg" alt="" />
                <span>WATCHLIST</span>
              </a>
              <a href="/dashboard">
                <img src="/images/original-icon.svg" alt="" />
                <span>ORIGNALS</span>
              </a>
              <a href="/dashboard">
                <img src="/images/movie-icon.svg" alt="" />
                <span>MOVIES</span>
              </a>
              <a href="/dashboard">
                <img src="/images/series-icon.svg" alt="" />
                <span>SERIES</span>
              </a>
            </NavMenu>
            <span className="spanname"> WELCOME {user.displayName}</span>

            <Dropdown onClick={logout}>
              <p>LOGOUT</p>
            </Dropdown>
            <div
              style={{ marginTop: '13px', marginRight: '40px' }}
              className="logout"
            >
              <img
                src={user.photoURL}
                width="35px"
                style={{ borderRadius: '50%' }}
                alt=""
              />
            </div>
          </Navbar>
        </>
      )}
    </div>
  )
}

const Navbar = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 64px;
  background-color: #040714;
  position: fixed;
  top: 0;
  z-index: 1;
  transition-timing-function: ease-in;
  transition: all 0.5s;
  letter-spacing: 16px;
`

const Dropdown = styled.div`
  position: absolute;
  top: 48px;
  right: 0;
  background: rgb(19, 19, 19);
  border: 1px solid rgba(151, 151, 151, 0.34);
  text-align: center;
  font-size: 8px;
  margin-right: 10px;
  letter-spacing: 3px;
  width: 100px;
  opacity: 0.22;

  &:hover {
    transform: scale(1);
    font-size: 14px;
    opacity: 1 !important ;
    transition-duration: 1s;
    cursor: pointer;
  }
`

const NavMenu = styled.div`
  align-items: center;
  display: flex;
  flex-flow: nowrap;
  height: 100%;
  justify-content: flex-end;
  margin: 0;
  padding: 0;
  position: relative;
  margin-right: auto;
  margin-left: 25px;

  a {
    display: flex;
    align-item: center;
    padding: 0 12px;

    img {
      height: 20px;
      width: 20px;
      min-width: 20px;
      z-index: auto;
    }

    span {
      color: rgb(249, 249, 249);
      font-size: 13px;
      letter-spacing: 1.42px;
      line-height: 1.08;
      padding: 2px 0px;
      white-space: nowrap;
      position: relative;
      cursor: pointer;

      &:before {
        background-color: rgb(249, 249, 249);
        border-radius: 0px 0px 4px 4px;
        bottom: -6px;
        content: '';
        left: 0px;
        height: 2px;
        opacity: 0;
        position: absolute;
        right: 0;
        transform-origin: left center;
        transform: scale(0);
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        visibility: hidden;
        width: auto;
      }
    }

    &:hover {
      span:before {
        transform: scaleX(1);
        visibility: visible;
        opacity: 1 !important;
      }
    }
  }

  @media (max-width: 768px) {
    display: none;
  }
`

export default NavDiv
