import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [form, setForm] = useState({ username: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (form.username === 'admin' && form.password === 'admin') {
      navigate('/dashboard'); 
    } else {
      setError('Invalid credentials');
    }
  };
return (
    <div className="min-h-screen flex items-center justify-center px-4  bg-cover bg-radial-[at_25%_25%] from-white to-zinc-900 to-75% bg-center bg-no-repeat h-screen w-screen" >
      <div className="bg-white/100 shadow-xl/30  backdrop-blur-sm p-6 rounded-lg w-full max-w-sm ">
        <h2 className="text-xl font-semibold mb-4 ">Sign in to Continue</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm mb-1">UserName</label>
            <input
              type="text"
              name="username"
              value={form.username}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
              placeholder="UserName"
            />
          </div>
          <div>
            <label className="block text-sm mb-1">Password</label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
              placeholder="••••••••"
            />
          </div>
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <button
            type="submit"
            className="w-full bg-[#0C9488] py-2 rounded-md hover:bg-black text-white"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;