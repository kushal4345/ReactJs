export function Profile(props) {
  return (
    <div className="pro">
      <img src={props.image} alt="Profile" />
      
      {/* Conditionally render name and title */}
      {props.name && <h1>{props.name}</h1>}
      {props.title && <h3>{props.title}</h3>}

      {/* Conditionally render summary only if name is present */}
      {props.name && props.summary && (
        <div className="summary">
          <h2>Summary</h2>
          <p>{props.summary}</p>
        </div>
      )}
    </div>
  );
}
