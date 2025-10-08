import axios from 'axios';
import React from 'react'
import { BASE_URL } from '../constants';
import { useDispatch } from 'react-redux';
import { removeUserFromFeed } from '../utils/feedSlice';

const UserCard = ({ user }) => {
    const dispatch = useDispatch();
    const { _id, firstName, lastName, age, gender, photoUrl, skills, about } = user;

    const handleSwipRequest = async (status, _id) => {
        try {
            await axios.post(BASE_URL + "/request/send/" + status + "/" + _id, {}, { withCredentials: true });
            dispatch(removeUserFromFeed(_id));
        } catch (err) {
            console.log(err);
        }
    }


    return user && (
        <div className='flex-col justify-center my-5 rounded-3xl'>
            <div className="card bg-base-300 shadow-sm max-w-96 h-[34rem] relative">
                <figure className='w-96 h-full p-2'>
                    <img
                        src={photoUrl}
                        alt="Profile photo" className='w-full'/>
                </figure>
                <div className="card-body bg-transparent absolute bottom-0 w-full ">
                    <h2 className="card-title text-3xl font-bold">{firstName + " " + lastName}{age && <span>{", " + age}</span>}</h2>
                    {gender && <span className="font-medium text-lg">{gender}</span>}
                    {skills && skills.length !== 0 && <p>Skills: {skills.join(", ")}</p>}
                    <p className='text-base'>{about}</p>
                </div>
            </div>
            <div className="card-actions justify-center m-4">
                <button className="btn btn-primary" onClick={() => handleSwipRequest("ignored", _id)}>Ignored
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>
                </button>
                <button className="btn btn-secondary" onClick={() => handleSwipRequest("interested", _id)}>Interested
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                    </svg>
                </button>
            </div>
        </div>
    )
}

export default UserCard;
