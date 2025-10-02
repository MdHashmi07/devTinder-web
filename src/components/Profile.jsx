import React from 'react'
import EditProfile from './EditProfile'
import { useSelector } from 'react-redux'

const Profile = () => {
  const user = useSelector((store) => store.user);

  return user && (
    <div className='w-full h-[100vh]'>
      <EditProfile user={user}/>
    </div>
  )
}

export default Profile
