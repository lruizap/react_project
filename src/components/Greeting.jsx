export function Greeting({ title }) {
  return <h1>{title}</h1>;
}

export function UserCard(props) {
  console.log(props);
  return (
    <div>
      <h1>{props.name}</h1>
      <p>{props.amount}€</p>
      <p>{props.married ? "Está casado" : "No está casado"}</p>
      <p>{props.points}</p>
      <ul>
        <li>City: {props.address.city}</li>
        <li>Street: {props.address.street}</li>
      </ul>
    </div>
  );
}
