import logo from './logo.svg';
import './App.css';
import { EjercicioComponent } from './components/EjercicioComponent';

function App() {

const fecha= new Date();
const yearActual= fecha.getFullYear();


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Bienvenido al master en react!!!
        </p>
      <EjercicioComponent year={yearActual} />
      </header>


    </div>
  );
}

export default App;
