
import './App.css';

function App() {
  return (
    <div className="App">
      <User name="Sydney" age={34} extra />
    </div>
  );
}

const User = (props) => {
  return (
    <div>
      <p>name: { props.name } </p>
      <p>age: { props.age } </p>
      <p>extra: { props.extra }</p>
    </div>
  )
}

export default App;
