import "./App.css";
import styled from "styled-components";

const TeamMemberContainer = styled.div `
  max-width: 180px;
  background-color: #f9f9f9;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(197, 15, 15, 0.48);
  text-align: center;
  color: black;
`

export function TeamMember(props) {
  return (
    <TeamMemberContainer>
      <div>
        <p>Hello my name is {props.name}</p>
        <p>I am {props.age} years old</p>
        <p>I have a{props.pet}</p>
      </div>
    </TeamMemberContainer>

  );
}
