import axios from 'axios';
import React from 'react'
import { BASE_URL } from '../constants';
import { useDispatch } from 'react-redux';
import { removeUserFromFeed } from '../utils/feedSlice';

const UserCard = ({user}) => {
    const dispatch = useDispatch();
    const {_id, firstName, lastName, age, gender, photoUrl, skills, about } = user;

    const handleSwipRequest = async (status, _id) => {
        try {
            await axios.post(BASE_URL + "/request/send/" + status + "/" + _id, {}, {withCredentials: true}); 
            dispatch(removeUserFromFeed(_id));
        }catch (err) {
            console.log(err);
        }
    }


    return user && (
        <div className='flex justify-center my-5'>
            <div className="card bg-base-300 shadow-sm max-w-96">
                <figure className='w-96 max-h-72 overflow-hidden'>
                    <img
                        src={photoUrl}
                        alt="Profile photo" className='w-full h-auto object-cover'/>
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{firstName + " " + lastName}</h2>
                    {age && gender && <span>{age + ", " + gender}</span>}
                    {skills && <p>Skills: {skills.join(", ")}</p>}
                    <p>{about}</p>
                    <div className="card-actions justify-center m-4">
                        <button className="btn btn-primary" onClick={() => handleSwipRequest("ignored", _id)}>Ignored</button>
                        <button className="btn btn-secondary" onClick={() => handleSwipRequest("interested", _id)}>Interested</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserCard;
