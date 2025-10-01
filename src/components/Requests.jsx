import React, { useEffect } from 'react'
import { BASE_URL } from '../constants'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { addRequest } from '../utils/requestSlice'

const Requests = () => {
    const dispatch = useDispatch();
    const requests = useSelector((store) => store.requests);

    const fetchRequest = async () => {
        try {
            const res = await axios.get(BASE_URL + "/user/request/received", { withCredentials: true });
            console.log(res);
            dispatch(addRequest(res.data.data));

        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        fetchRequest();
    }, []);

    if (!requests) return;

    if (requests.length === 0) return <h1 className='text-center my-10 font-bold text-2xl'>No Request Found!!</h1>
    return (
        <div className='w-full h-[100vh]'>
            <h1 className='text-center my-10 text-2xl font-bold'>Connection Requests</h1>
            {requests.map((request) => {
                const { _id, firstName, lastName, photoUrl, age, gender, about } = request.fromUserId;
                return (
                    <div key={_id} className="flex justify-around items-center m-4 p-4 gap-10 rounded-lg bg-base-300 w-[35rem] mx-auto">
                        <div className='flex justify-center items-center  w-32'>
                            <img src={photoUrl} alt="photo" className='w-20 h-20 rounded-full object-cover' />
                        </div>
                        <div>
                            <h2 className='font-semibold text-lg pb-2'>{firstName + " " + lastName}</h2>
                            {age && gender && <p className='font-light text-sm'>{age + ", " + gender}</p>}
                            <p className='font-light text-sm'>{about}</p>
                        </div>
                        <div className='flex gap-2'>
                            <button className="btn btn-success">Accept</button>
                            <button className="btn btn-error">Reject</button>
                        </div>

                    </div>
                )
            })}
        </div>
    )
}

export default Requests
