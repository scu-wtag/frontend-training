import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { useNavigate } from "react-router";
import { Link } from "react-router-dom"
import './App.css'

function App() {
  let navigate = useNavigate();
  return (
    <>
      <div>
        <p> this is the app</p>
        <Link to="/home">
          <button>Go to Home</button>
        </Link>
        <Link to="/about">
          <button>Go to about</button>
        </Link>
        <button onClick={() => navigate(-1)}>
          Go Back
        </button>
      </div>
    </>
  )
}

export default App
