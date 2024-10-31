
import './App.css';

function App() {
  //return se phale javascript and return ke baad httml
  const title = "Welcome to the New F1 Edit";
  const link = "https://www.google.com"
  return (
    <div className="App">
      <div className="FirstApplication">
        <h1>App component</h1>
        <h1>{title}</h1>
        <p>{Math.random()*10}</p>
        <p>{['This',' is',' a',' array']}</p>
        <a href={link}> Google Site </a>
      </div>
    </div>
  );
}
//a component is a function (import this app componenet) we always return something inside the function
export default App;
//in the end we always export our componenet function that is function App
