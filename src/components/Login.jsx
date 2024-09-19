import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState({});
  const navigate = useNavigate();

  const validate = () => {
    const newError = {};
    if(!username){
      newError.username = 'Username harus di isi.';
    }else if(!/^[A-Za-z\s]+$/.test(username)){
      newError.username = 'Username hanya boleh menggunakan huruf.';
    }

    if(!password){
      newError.password = 'Password harus di isi.';
    }else if(password.length < 6){
      newError.password = 'Password tidak boleh kurang dari 6 karakter.';
    }

    setError(newError);
    return Object.keys(newError).length === 0;
  }

  const handleClick = (e) => {
    const {id, value} = e.target;
    if(id === 'username'){
      setUsername(value);
    }else if(id === 'password'){
      setPassword(value);
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const storedUser = JSON.parse(localStorage.getItem('user'))
    const userData = {username, password}
    if(validate()){
      if (storedUser){
        if(username === storedUser.username && password === storedUser.password){
          console.log(userData)
          alert('Login successful!'); 
          navigate('/create');
        }else{
          setMessage('Invalid username or password.');
        }
      } else {
        setMessage('Tidak ada pengguna yang terdaftar.');
      }
    }else{
      setMessage('Harap perbaiki kesalahan sebelum melakukan submit.');
    }
  }
  return (
    <div className='bg-blue-400 flex justify-center items-center min-h-screen'>
      <div className='bg-blue-300 p-6 rounded-lg shadow-lg'>
      <h2 className='text-2xl font-bold mb-4 text-center'>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username" className='block text-sm font-medium mb-1'>Username:</label>
          <input type="text" onChange={handleClick} id='username' value={username} placeholder='Enter Username' className='w-full px-4 py-2 border border-gray-300 rounded-md'/>
          {error.username && <p className='text-red-500'>{error.username}</p>}
        </div>

        <div>
          <label htmlFor='password' className='block text-sm font-medium mb-1'>Password:</label>
          <input type="password" onChange={handleClick} id='password' value={password} placeholder='Enter Password' className='w-full px-4 py-2 border border-gray-300 rounded-md'/>
          {error.password && <p className='text-red-500'>{error.password}</p>}
        </div>
        <br />
        <button type="submit" className='w-full py-2 bg-blue-400 rounded-md'>Login</button>
      </form>
      {message && <p className="text-center text-red-500">{message}</p>}
      </div>
    </div>
  )
}

export default Login;
