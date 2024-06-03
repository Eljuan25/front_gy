
import React, { useState } from 'react';
import { registerUser } from '../services/api';



const RegisterPage: React.FC = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
    age: '',
    avatar: null,
  });
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files && e.target.files[0];
    setFormData({
      ...formData,
      avatar: selectedFile || null,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await registerUser(formData);
    } catch (error) {
      setErrorMessage('Ocurrió un error al registrar al usuario');
    }
  };

  return (
    <div>
      <h1>Registro</h1>
      {errorMessage && <p>{errorMessage}</p>}
      <form onSubmit={handleSubmit}>
        <input type="email" name="email" placeholder="Correo electrónico" value={formData.email} onChange={handleChange} />
        <input type="password" name="password" placeholder="Ingresa Contraseña" value={formData.password} onChange={handleChange} />
        <input type="text" name="name" placeholder="Nombre de usuario" value={formData.name} onChange={handleChange} />
        <input type="number" name="age" placeholder="Edad" value={formData.age} onChange={handleChange} />
        <input type="file" name="avatar" onChange={handleImageChange} />
        <button type="submit">Registrarse</button>
      </form>
    </div>
  );
};

export default RegisterPage;

