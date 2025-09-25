import "./App.css";
import User from "./User";

export default function App() {
  return (
    <>
      <User
        name="Spongebob"
        age={32}
        hobby="crabby patties"
        color="yellow"
      />
    </>
  );
}