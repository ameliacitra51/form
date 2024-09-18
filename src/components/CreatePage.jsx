import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';


const CreatePage = () => {
  const [name, setName] = useState('');
  const [ttl, setTtl] = useState('');
  const [gender, setGender] =useState('');
  const [religion, setReligion] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [divisi, setDivisi] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState({});
  const navigate = useNavigate();

  const validate = () => {
    const newError = {};
    if(!name){
      newError.name = 'Name harus di isi.';
    }else if(!/^[A-Za-z\s]+$/.test(name)){
      newError.name = 'Name hanya boleh menggunakan huruf.';
    }

    if(!ttl){
      newError.ttl = 'Date of birth harus di isi';
    }else if(!/^\d{2}-\d{2}-\d{4}$/.test(ttl)){
      newError.ttl = 'Date of birth harus dalam format 00-00-0000';
    }
    
    if(!gender) newError.gender = 'Gender harus di isi.';
    if(!religion) newError.religion = 'Regiligion harus di isi.';
    if(!address) newError.address = 'Address harus di isi.';

    if(!phone){
      newError.phone = 'Phone harus di isi';
    }else if(!/^\d+$/.test(phone)){
      newError.phone = 'Phone hanya boleh menggunakan angka.';
    }

    if(!divisi) newError.divisi = 'Divisi harus di isi.';

    setError(newError);
    return Object.keys(newError).length === 0;
  }

  const handleClick = (e) => {
    const {id, value} = e.target;
    if(id === 'name'){
      setName(value);
    }else if(id  ===  'ttl'){
      setTtl(value);
    }else if(id === 'gender'){
      setGender(value)
    }else if(id === 'religion'){
      setReligion(value);
    }else if(id === 'address'){
      setAddress(value)
    }else if(id  === 'phone'){
      setPhone(value);
    }else if(id === 'divisi'){
      setDivisi(value);
  }
}

  const handleSubmit = (e) => {
    e.preventDefault();
    if(validate()){
      console.log({name, ttl, gender, religion, address, phone, divisi});
      alert('Form successful!')

      navigate('/Thanks');
    }else{
      setMessage('Harap perbaiki kesalahan sebelum melakukan submit.');
    }
  }
  return (
    <div>
      <h2 className='text-2xl font-bold mb-4 text-center'>About</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name" className='block text-sm font-medium mb-1'>Name:</label>
          <input type="text" onChange={handleClick} id='name' value={name} placeholder='Enter Name' className='w-full px-4 py-2 border border-gray-300 rounded-md'/>
          {error.name && <p className='text-red-500'>{error.name}</p>}
        </div>

        <div>
          <label htmlFor='ttl' className='block text-sm font-medium mb-1'>Date of birth:</label>
          <input type="text" onChange={handleClick} id='ttl' value={ttl} placeholder='Enter Date of birth' className='w-full px-4 py-2 border border-gray-300 rounded-md'/>
          {error.ttl && <p className='text-red-500'>{error.ttl}</p>}
        </div>

        <div>
          <label htmlFor="gender" className='block text-sm font-medium mb-1'>Gender:</label>
          <input type="text" onChange={handleClick} id='gender' value={gender} placeholder='Enter Gender' className='w-full px-4 py-2 border border-gray-300 rounded-md'/>
          {error.gender && <p className='text-red-500'>{error.gender}</p>}
        </div>

        <div>
          <label htmlFor="religion" className='block text-sm font-medium mb-1'>Religion:</label>
          <input type="text" onChange={handleClick} id='religion' value={religion} placeholder='Enter Religion' className='w-full px-4 py-2 border border-gray-300 rounded-md'/>
          {error.religion && <p className='text-red-500'>{error.religion}</p>}
        </div>

        <div>
          <label htmlFor="address" className='block text-sm font-medium mb-1'>Address:</label>
          <input type="text" onChange={handleClick} id='address' value={address} placeholder='Enter Address' className='w-full px-4 py-2 border border-gray-300 rounded-md'/>
          {error.address && <p className='text-red-500'>{error.address}</p>}
        </div>

        <div>
          <label htmlFor="phone" className='block text-sm font-medium mb-1'>Phone:</label>
          <input type="text" onChange={handleClick} id='phone' value={phone} placeholder='Enter Phone' className='w-full px-4 py-2 border border-gray-300 rounded-md'/>
          {error.phone && <p className='text-red-500'>{error.phone}</p>}
        </div>

        <div>
          <label htmlFor="divisi" className='block text-sm font-medium mb-1'>Divisi:</label>
          <input type="text" onChange={handleClick} id='divisi' value={divisi} placeholder='Enter Divisi' className='w-full px-4 py-2 border border-gray-300 rounded-md'/>
          {error.divisi && <p className='text-red-500'>{error.divisi}</p>}
        </div>
        <br />
        <button type="submit" className='w-full py-2 bg-blue-400 rounded-md'>Submit</button>
      </form>
      {message && <p className="text-center text-red-500">{message}</p>}
    </div>
  )
}

export default CreatePage;
