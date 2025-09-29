import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { TeamMember } from "./TeamMember";

function App() {
  const team = [
    { name: "Amy", age: 30, pet: "Rabbit called Buns" },
    { name: "Thomas", age: 49, pet: "Budgi names Tim" },
    { name: "Joanna", age: 25, pet: "Golden Retriever called Buddy" },
    { name: "Jake", age: 19, pet: "Axolotl named Axy" },
  ];
  return (
    <div className="team-container">
      <h1>Our Team</h1>
      <div className="team-cards">
        {team.map((u) => (
          <TeamMember name={u.name} age={u.age} pet={u.pet} />
        ))}
      </div>
    </div>
  );
}

export default App;
