export default function User(props) {
  return (
      <div
      >
      <p>Name: {props.name}</p>
      <p>Age: {props.age}</p>
      <p>Hobby: {props.hobby}</p>
      <p>Fav color: {props.color}</p>
    </div>
  );
}