import "./App.css";

export function TeamMembers(props) {
  return (
    <div className="team-member-container">
      <p>Hello my name is {props.name}</p>
      <p>I am {props.age} years old</p>
      <p>I have a {props.pet}</p>
    </div>
  );
}
