import axios from 'axios';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { BASE_URL } from '../constants';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [emailId, setEmailId] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [error, setError] = useState("");
  const [isLoggin, setIsLoggin] = useState(true);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await axios.post(BASE_URL + "/login", {
        emailId, password
      }, { withCredentials: true });

      dispatch(addUser(res.data));
      return navigate("/");

    } catch (err) {
      setError(err?.response?.data);
    }
  }

  const handleSignup = async () => {
    try {
      const res = await axios.post(BASE_URL + "/signup", {firstName, lastName, emailId, password}, {withCredentials: true});
      console.log(res)
      dispatch(addUser(res.data.data));
      return navigate("/profile");
    }catch(err) {
      setError(err?.response?.data);
    }
  }

  return (
    <div className='flex justify-center my-32'>
      <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-[20rem] border p-4">
        <legend className="fieldset-legend text-center text-xl">{isLoggin ? "Login" : "Sign Up"}</legend>

        {!isLoggin && <>
        <label className="label">First Name</label>
          <input type="text" className="input" value={firstName} placeholder="First Name" onChange={(e) => setFirstName(e.target.value)} />

          <label className="label">Last Name</label>
          <input type="text" className="input" value={lastName} placeholder="Last Name" onChange={(e) => setLastName(e.target.value)} />
        </>}

        <label className="label">Email</label>
        <input type="email" className="input" value={emailId} placeholder="Email" onChange={(e) => setEmailId(e.target.value)} />

        <label className="label">Password</label>
        <input type="password" className="input" value={password} placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
        <p className='text-red-500'>{error}</p>
        <button className="btn btn-secondary mt-5" onClick={isLoggin ? handleLogin : handleSignup}>{isLoggin ? "Login" : "Sign Up"}</button>
        <p className='text-center my-2' onClick={() => setIsLoggin(!isLoggin)}>{isLoggin? "New User? SignUp" : "Existing User? LogIn"} </p>
      </fieldset>
    </div>
  )
}

export default Login
