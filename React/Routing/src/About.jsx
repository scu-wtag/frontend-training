import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { useNavigate } from "react-router";
import { Link } from "react-router-dom"
import './App.css'

function About() {
    let navigate = useNavigate();
    return (
        <>
            <div>
                <p> this is the about</p>
                <Link to="/">
                    <button>Go to root</button>
                </Link>
                <Link to="/home">
                    <button>Go to home</button>
                </Link>
                <button onClick={() => navigate(-1)}>
                    Go Back
                </button>
            </div>
        </>
    )
}

export default About
