import React from 'react';
import ProgressBar from './componentes/ProgressBar'; // Importa el componente
import UserForm from './componentes/UserForm';
import Timer from './componentes/Timer';
import Navbar from './componentes/Navbar';
import PasswordGenerator from './componentes/PasswordGenerator';

function App() {
  return (
    <div className="App">
      <h1>NavBar</h1>
      <Navbar /> 
      <h1>Barra de Progreso Dinámica</h1>
      <ProgressBar /> 
      <h1>Formulario</h1>
      <UserForm />
      <h1>Cronometro</h1>
      <Timer />
      <h1>Generador de constraseñas</h1>
      <PasswordGenerator />



    </div>
  );
}

export default App;
