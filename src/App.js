import logo from './logo.svg';
import './App.css';
import Ingresos from './Components/ingresos';
import { getByTitle } from '@testing-library/react';
import React, { useState } from 'react';
import Contador from './Components/Contador';

function Cita(){
  const [Cita, SetCitas] = useState([])
  Cita = [
    { nombre: 'Blacky', dueño: 'Jere', Fecha: '2023-05-08', Hora: '16:15', Sintomas: 'No está comiendo'}
  ]
}


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
          <div class="one-half column">
            <AdministrarCitas/>
          </div>
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
        <Contador />
      </header>
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

function AdministrarCitas(){
  const OnDelete = (Cita)=>{
    SetCitas(CitasExistentes =>{
      return CitasExistentes.filter((item) => item !== Cita);
    })
  }

  return (
    <div className='AdministrarCitas'>
      <h2>Administra tus citas</h2>
      <div class="Cita">
              <p>Mascota: <span>Blacky</span></p>
              <p>Dueño: <span>Jere</span></p>
              <p>Fecha: <span>2023-05-08</span></p>
              <p>Hora: <span>16:15</span></p>
              <p>Sintomas: <span>No está comiendo</span></p>
              <button onClick={()=>OnDelete()}class="button elimnar u-full-width">eliminar</button>
            </div>
            <div class="Cita">
              <p>Mascota: <span>Nina</span></p>
              <p>Dueño: <span>Martin</span></p>
              <p>Fecha: <span>2021-08-05</span></p>
              <p>Hora: <span>08:20</span></p>
              <p>Sintomas: <span>Le duele la pierna</span></p>
              <button class="button elimnar u-full-width">eliminar</button>
            </div>
            <div class="Cita">
              <p>Mascota: <span>Sifon</span></p>
              <p>Dueño: <span>Flecha</span></p>
              <p>Fecha: <span>2023-06-10</span></p>
              <p>Hora: <span>09:24</span></p>
              <p>Sintomas: <span>Duerme mucho</span></p>
              <button class="button elimnar u-full-width">eliminar</button>
            </div>   
    </div>
  )
}
export default App
