
import './App.css';
import react1 from './imagenes/react1.png';
import Boton from './componentes/boton';

function App() {
  return (
    <div className='App'>
      <div className='react-logo-contenedor'>
        <img src={react1} className='react-img' alt='logo react' />
      </div>
      <div className='contenedor-calculadora'>
        <div className='fila'>
          <Boton> 1 </Boton>
        </div>
        <div className='fila'></div>
        <div className='fila'></div>
        <div className='fila'></div>
        <div className='fila'></div>
      </div>
    </div>
  );
}

export default App;
