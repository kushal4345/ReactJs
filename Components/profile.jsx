export function Profile(props) {
  return (
    <div className="pro">
      <img src={props.image} alt="Profile" />
      <h1>{props.name}</h1>
      <h3>{props.title}</h3>
      <div className="summary">
        <h2>Summary</h2>
        <p>{props.summary}</p>
      </div>
    </div>
  );
}
