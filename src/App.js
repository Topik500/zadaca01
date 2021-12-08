import logo from './logo.svg';
import './App.css';
import sum_operation from './sum_operation';
import { subtraction, multiplication, division } from './other_operactions';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
const x = 10;
const y = 5;

console.log('Osnovne operacije sa zadanim brojevima:')
console.log(sum_operation(x,y));
console.log(subtraction(x,y));
console.log(multiplication(x,y));
console.log(division(x,y));

export default App;
