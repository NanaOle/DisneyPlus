import React, { useEffect, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { Link, useNavigate } from 'react-router-dom'
import {
  auth,
  registerWithEmailAndPassword,
  logInWithEmailAndPassword,
  signInWithGoogle,
} from '../firebase'
import '../register.css'
import { Modal, makeStyles } from '@material-ui/core'

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

function Register2() {
  const [open, setopen] = useState(false)
  const classes = useStyle()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [user, loading, error] = useAuthState(auth)
  const history = useNavigate()

  const register = () => {
    if (!name) alert('Please enter name')
    registerWithEmailAndPassword(email, password)
    setEmail('')
    setName('')
    setPassword('')
  }
  useEffect(() => {
    if (loading) return
    if (user) history.replace('/dashboard')
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
    <>
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

      <div className="register">
        <div className="register__container">
          <input
            type="text"
            className="register__textBox"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Full Name"
          />
          <input
            type="text"
            className="register__textBox"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="E-mail Address"
          />
          <input
            type="password"
            className="register__textBox"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
          <button className="register__btn" onClick={register}>
            Register
          </button>
          <button
            className="register__btn register__google"
            onClick={signInWithGoogle}
          >
            Register with Google
          </button>
          <div>
            <p style={{ color: 'black' }}>
              {' '}
              Already have an account?{' '}
              <Link
                style={{ color: 'blue' }}
                to="#"
                onClick={() => setopen(true)}
              >
                Login
              </Link>{' '}
              now.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
export default Register2
