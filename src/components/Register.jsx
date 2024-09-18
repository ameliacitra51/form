import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState(''); //buat variabel untuk menampilkan pesan dari error yg ditemukan ketika klik submit 
  const [error, setError] = useState({});
  const navigate = useNavigate();

  const validate = () => {
    const newError = {};
    if(!username){
      newError.username = 'Username harus di isi.';
    }else if(!/^[A-Za-z\s]+$/.test(username)){
      newError.username = 'Username hanya boleh menggunakan huruf.';
    }

    if(!email){
      newError.email = 'Email harus di isi.';
    }else if(!/^\S+@\S+\.\S+$/.test(email)){
      newError.email = 'Email tidak valid.';
    }

    if(!phone){
      newError.phone = 'Phone harus di isi.';
    }else if(!/^\d+$/.test(phone)){
      newError.phone = 'Phone hanya boleh menggunakan angka.';
    }

    if(!address) newError.address = 'Address harus di isi.';

    if(!password) {
      newError.password = 'Password harus di isi.';
    }else if(password.length <6){
      newError.password = 'Password tidak boleh kurang dari 6 karakter.';
    }

    setError(newError);
    return Object.keys(newError).length === 0;
  }

  const handleChange = (e) => {
    const { id, value } = e.target;
    if (id === 'username') {
      setUsername(value);
    } else if (id === 'email') {
      setEmail(value);
    } else if (id === 'phone') {
      setPhone(value);
    } else if (id === 'address') {
      setAddress(value);
    } else if (id === 'password') {
      setPassword(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //pakai lokal storage untuk menyimpan data
    const userData = {username, email, phone, address, password};

    if(validate()){
      localStorage.setItem('user', JSON.stringify(userData));
      alert('Registration successful!');

      navigate('/login');
    }else{
      setMessage('Harap perbaiki kesalahan sebelum melakukan submit.');
    }
    console.log(userData);
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4 text-center">Register</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username" className="block text-sm font-medium mb-1">Username:</label>
          <input type="text" onChange={handleChange} id="username" value={username} placeholder="Enter Username" className="w-full px-4 py-2 border border-gray-300 rounded-md"/>
          {error.username && <p className='text-red-500'>{error.username}</p>}
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-1">Email:</label>
          <input type="text" onChange={handleChange} id="email" value={email} placeholder="Enter Email" className="w-full px-4 py-2 border border-gray-300 rounded-md"/>
          {error.email && <p className='text-red-500'>{error.email}</p>}
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium mb-1">
            Phone:
          </label>
          <input type="text" onChange={handleChange} id="phone" value={phone} placeholder="Enter Phone" className="w-full px-4 py-2 border border-gray-300 rounded-md"/>
          {error.phone && <p className='text-red-500'>{error.phone}</p>}
        </div>

        <div>
          <label htmlFor="address" className="block text-sm font-medium mb-1">Address:</label>
          <input type="text" onChange={handleChange} id="address" value={address} placeholder="Enter Address" className="w-full px-4 py-2 border border-gray-300 rounded-md"/>
          {error.address && <p className='text-red-500'>{error.address}</p>}
        </div>

        <div>
          <label htmlFor="password" className="block text-sm font-medium mb-1">Password:</label>
          <input type="password" onChange={handleChange} id="password" value={password} placeholder="Enter Password" className="w-full px-4 py-2 border border-gray-300 rounded-md"/>
          {error.password && <p className='text-red-500'>{error.password}</p>}
        </div>
        <br />
        <button type="submit" className="w-full py-2 bg-blue-400 rounded-md">Register</button>
      </form>
      {message && <p className="text-center text-red-500">{message}</p>}
    </div>
  );
};

export default Register;
