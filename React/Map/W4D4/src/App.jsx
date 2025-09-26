import "./App.css";
import User from "./User";

export default function App() {
  const users = [
    { id: 1, name: "Spongebob", age: 32, hobby: "Crabby Patties", color: "yellow" },
    { id: 2, name: "Patrick", age: 34, hobby: "Jellyfishing", color: "pink" },
    { id: 3, name: "Sandy", age: 31, hobby: "Karate", color: "brown" },
  ];

  return (
    <div>
      {users.map((u) => (
        <User
          key={u.id}
          name={u.name}
          age={u.age}
          hobby={u.hobby}
          color={u.color}
        />
      ))}
    </div>
  );
}