import React, { useState } from 'react';
import {useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (username === 'Admin' && password === 'Admin@123') {
      console.log('Login bem-sucedido! Preparando redirecionamento...');
      setTimeout(() => {
        navigate('/reserva', { replace: true });
      }, 100); // Espera 100ms antes de redirecionar
    } else {
      console.log('Credenciais inválidas');
      alert('Credenciais inválidas');
    }
  };

  return (
    <div className="flex justify-center items-center h-screen ">
      <form onSubmit={handleSubmit} className="bg-white px-8 py-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
        
        <div className="mb-4">
          <label htmlFor="username" className="block text-sm font-medium text-gray-700">Usuário</label>
          <input 
            type="text" 
            id="username" 
            className="mt-1 block w-full rounded-md border-gray-400 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" 
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">Senha</label>
          <input 
            type="password" 
            id="password" 
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <div className="flex items-center justify-between mt-4">
          <button type="submit" className="transition ease-in-out hover:-translate-1 hover:scale-105 duration-300 w-full px-4 py-2 bg-gray-900 text-white rounded-md hover:bg-gray-950 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
            Entrar
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
