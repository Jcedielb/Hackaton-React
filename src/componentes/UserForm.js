import React, { useState } from 'react';

const UserForm = () => {
  // Estados para almacenar los valores ingresados
  const [formData, setFormData] = useState({
    username: '',
    fullName: '',
    age: ''
  });

  const [submittedData, setSubmittedData] = useState(null); // Para almacenar los datos enviados

  // Manejar cambios en los inputs
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Manejar el submit del formulario
  const handleSubmit = (e) => {
    e.preventDefault(); // Evita que la página se recargue al hacer submit
    setSubmittedData(formData); // Almacena los datos ingresados
  };

  return (
    <div>
      <h2>Formulario de Usuario</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Full Name:</label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Age:</label>
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>

      {submittedData && (
        <div>
          <h3>Datos ingresados:</h3>
          <p>Username: {submittedData.username}</p>
          <p>Full Name: {submittedData.fullName}</p>
          <p>Age: {submittedData.age}</p>
        </div>
      )}
    </div>
  );
};

export default UserForm;
