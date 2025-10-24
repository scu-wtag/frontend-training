import React from "react";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>TODO</h1>
      <Link to={"/bye"}>
        <button>Leave Site</button>
      </Link>
    </header>
  );
}
