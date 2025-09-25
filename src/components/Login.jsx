import axios from 'axios';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { BASE_URL } from '../constants';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const[emailId, setEmailId] = useState("rahul@gmail.com");
  const[password, setPassword] = useState("Rahul@123");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async () => {
    try{
      const res = await axios.post(BASE_URL+"/login", {
        emailId, password
      }, {withCredentials: true});
    
     dispatch(addUser(res.data));
     return navigate("/");
      
    }catch(err) {
      console.log(err)
    }
  }

  return (
    <div className='flex justify-center my-32'>
      <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-[20rem] border p-4">
        <legend className="fieldset-legend text-center text-xl">Login</legend>

        <label className="label">Email</label>
        <input type="email" className="input" value={emailId} placeholder="Email" onChange={(e) => setEmailId(e.target.value)}/>

        <label className="label">Password</label>
        <input type="password" className="input" value={password} placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>

        <button className="btn btn-secondary mt-5" onClick={handleLogin}>Login</button>
      </fieldset>
    </div>
  )
}

export default Login
