import "./App.css";
import styled from "styled-components";
import { TeamMember } from "./TeamMember";

const TeamContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 200px;
`;

const TeamCards = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 2rem;
`;

function App() {
  const team = [
    { name: "Amy", age: 30, pet: " Rabbit called Buns" },
    { name: "Thomas", age: 49, pet: " Budgie named Tim" },
    { name: "Joanna", age: 25, pet: " Golden Retriever called Buddy" },
    { name: "Jake", age: 19, pet: "n Axolotl named Axy" },
  ];

  return (
    <TeamContainer>
      <h1>Our Team</h1>
      <TeamCards>
        {team.map((u, i) => (
          <TeamMember key={i} name={u.name} age={u.age} pet={u.pet} />
        ))}
      </TeamCards>
    </TeamContainer>
  );
}

export default App;