import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './components/Login'
import NavDiv from './components/NavDiv'
import Dashboard from './components/Dashboard'
import Reset from './components/Reset'
import Register2 from './components/Register2'
import Details from './components/Details'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavDiv />
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/register" element={<Register2 />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
          <Route exact path="/reset" element={<Reset />} />
          <Route exact path="*" element={<Login />} />
          <Route exact path="/detail/:id" element={<Details />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
