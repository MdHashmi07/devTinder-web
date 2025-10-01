import axios from 'axios'
import React, { useEffect } from 'react'
import { BASE_URL } from '../constants'
import { useDispatch, useSelector } from 'react-redux'
import { addConnections } from '../utils/connectionSlice'

const Connections = () => {
  const dispatch = useDispatch();
  const showConnections = useSelector((store) => store.connections);
  // console.log(showConnections)

  const connections = async () => {
    try {
      const res = await axios.get(BASE_URL + "/user/connections", { withCredentials: true });
      dispatch(addConnections(res.data.data));
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    connections();
  }, []);


  if (!showConnections) return;

  if (showConnections.length === 0) return <h1 className='text-center my-10 font-bold text-2xl'>No Connections found!!</h1>


  return (
    <div className='w-full h-[100vh]'>
      <h1 className='text-center my-10 text-2xl font-bold'>Connections</h1>
        {showConnections.map((connection) => {
          const {_id,  firstName, lastName, photoUrl, age, gender, about } = connection;
          return (
            <div key={_id} className="flex items-center m-4 p-4 gap-10 rounded-lg bg-base-300 w-[30rem] mx-auto">
              <div className='ps-4'>
                <img src={photoUrl} alt="photo" className='w-20 h-20 rounded-full object-cover'/>
              </div>
              <div>
                <h2 className='font-semibold text-lg pb-2'>{firstName + " " + lastName}</h2>
                {age && gender && <p className='font-light text-sm'>{age + ", " + gender}</p>}
                <p className='font-light text-sm'>{about}</p>
              </div>
            </div>
          )
        })}
    </div>
  )
}

export default Connections
