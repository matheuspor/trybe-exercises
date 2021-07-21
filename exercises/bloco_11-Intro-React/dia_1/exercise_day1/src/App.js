import logo from './logo.svg';
import './App.css';

const compromissos = ['tomar banho', 'assistir aula ao-vivo', 'escovar os dentes'];

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

function App() {
  return (compromissos.map((val) => Task(val)));
}

export default App;