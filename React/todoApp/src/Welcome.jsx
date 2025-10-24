import React from "react";
import Header from "./components/Header.jsx";
import styles from "./App.module.css";
import { Link } from "react-router-dom";

export default function Welcome() {
    return (
        <div>
            <h1>Welcome to the todo App!</h1>
            <Link to={"/todos"}>
                <button>Go to your todos</button>
            </Link>
        </div>
    );
}
