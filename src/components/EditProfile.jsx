import axios from 'axios';
import React, { useState } from 'react'
import { BASE_URL } from '../constants';
import UserCard from './UserCard';
import { useDispatch } from 'react-redux';
import { updateUser } from '../utils/userSlice';

const EditProfile = ({ user }) => {
    const dispatch = useDispatch();
    const [firstName, setFirstName] = useState(user.firstName);
    const [lastName, setLastName] = useState(user.lastName);
    const [age, setAge] = useState(user.age);
    const [gender, setGender] = useState(user.gender);
    const [photoUrl, setPhotoUrl] = useState(user.photoUrl);
    const [about, setAbout] = useState(user.about);
    const [error, setError] = useState("");
    const [showToast, setShowToast] = useState(false);


    const handleSaveData = async () => {
        setError("");
        try {
            const res = await axios.put(BASE_URL + "/profile/edit",
                { firstName, lastName, age, gender, photoUrl, about },
                { withCredentials: true }
            );
            dispatch(updateUser(res?.data?.data));
            setShowToast(true);
            setTimeout(() => {
                setShowToast(false)
            }, 3000);

        } catch (err) {
            console.error("Error updating profile:", err);
            setError(err.response.data || "Failed to update profile");
        }

    }
    return (
        <div className='flex justify-center gap-28'>
            <div className='flex justify-between'>
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-[20rem] border p-4">
                    <legend className="fieldset-legend text-center text-xl">Edit Profile</legend>
                    <label className="label">First Name</label>
                    <input type="text" className="input" value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder="First Name" />
                    <label className="label">Last Name</label>
                    <input type="text" className="input" value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder="Last Name" />
                    <label className="label">Age</label>
                    <input type="text" className="input" value={age} onChange={(e) => setAge(e.target.value)} placeholder="Age" />
                    <label className="label">Gender</label>
                    <select className='input' value={gender} onChange={(e) => setGender(e.target.value)}>
                        <option value={""} disabled selected>Select</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="others">Other</option>
                    </select>
                    <label className="label">Photo URL</label>
                    <input type="text" className="input" value={photoUrl} onChange={(e) => setPhotoUrl(e.target.value)} placeholder="Photo Url" />
                    <label className="label">About</label>
                    <textarea className="textarea h-24" placeholder="About" value={about} onChange={(e) => setAbout(e.target.value)}></textarea>
                    <p className='text-red-500'>{error}</p>
                    <button className="btn btn-secondary mt-5" onClick={handleSaveData}>Update Profile</button>
                </fieldset>
            </div>
            <UserCard user={{ firstName, lastName, age, gender, photoUrl, about }} />

            {showToast && <div className="toast toast-top toast-center">
                <div className="alert alert-success">
                    <span className='font-bold'>Profile updated successfully</span>
                </div>
            </div>
            }
        </div>


    )
}

export default EditProfile
