import React, { useState } from 'react';
import './ProgressBar.css'; // Archivo CSS para estilizar la barra

const ProgressBar = () => {
  const [percentage, setPercentage] = useState(0); // Estado para el porcentaje de la barra

  // Función para manejar el cambio de valor en el campo de texto
  const handleInputChange = (e) => {
    let value = e.target.value;

    // Convertimos el valor a número y verificamos que esté entre 0 y 100
    // Actualizamos el estado del porcentaje
    setPercentage(value);
  };

  return (
    <div>
      <input 
        type="number" 
        value={percentage} 
        onChange={handleInputChange} 
        placeholder="Enter a number (0-100)" 
        min="0"
        max="100"
      />
      <div className="progress-bar-container">
        <div className="progress-bar" style={{ width: `${percentage}%` }}>
          {percentage}%
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
