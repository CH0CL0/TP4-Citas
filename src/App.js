import logo from './logo.svg';
import './App.css';
import Ingresos from './Components/Ingresos';
import { getByTitle } from '@testing-library/react';
import React from 'react';



function App() {
  return (
    <div className="App">
      <div id="root">
      <Title/>
      <div class="container">
        <div class="row">
          <div class="one-half column">
            <CrearCita/>
          </div>
          </div>
        </div>
      </div>
    </div>

  );
}
function Title() {
  return (
    <h1>ADMINISTRADOR DE PACIENTES</h1>
  )
}

function CrearCita(){
  return (
  <div className="CrearCita">
    <h2>Crear mi Cita</h2>
        <form>
          <label>Nombre Mascota</label>
          <input type="text" name="mascota" class="u-full-width" placeholder="Nombre Mascota" value=""></input>
          <label>Nombre Dueño</label><input type="text" name="propietario" class="u-full-width" placeholder="Nombre dueño de la mascota" value=""></input>
          <label>Fecha</label><input type="date" name="fecha" class="u-full-width" value=""></input>
          <label>hora</label><input type="time" name="hora" class="u-full-width" value=""></input>
          <label>Sintomas</label><textarea name="sintomas" class="u-full-width"></textarea>
          <button type="submit" class="u-full-width button-primary">Agregar Cita</button>
        </form> 
  </div>
  )
}

export default App
