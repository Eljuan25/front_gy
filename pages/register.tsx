// pages/register.tsx
import React, { useState } from 'react';
import { registerUser } from '../services/api';

const RegisterPage: React.FC = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
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
        <input type="text" name="username" placeholder="Nombre de usuario" value={formData.username} onChange={handleChange} />
        <input type="email" name="email" placeholder="Correo electrónico" value={formData.email} onChange={handleChange} />
        <input type="password" name="password" placeholder="Contraseña" value={formData.password} onChange={handleChange} />
        <button type="submit">Registrarse</button>
      </form>
    </div>
  );
};

export default RegisterPage;
