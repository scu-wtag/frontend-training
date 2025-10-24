import React from "react";
import Header from "./components/Header.jsx";
import styles from "./App.module.css";
import { Link } from "react-router-dom";

export default function Bye() {
    return (
        <div>
            <h1>Goodbye! Hope to see you soon!</h1>
            <p>Changed ur mind?</p>
            <Link to={"/todos"}>
                <button>Go back to your todos</button>
            </Link>
        </div>
    );
}
