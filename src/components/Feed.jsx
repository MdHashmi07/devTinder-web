import axios from 'axios';
import React, { useEffect } from 'react'
import { BASE_URL } from '../constants';
import { useDispatch, useSelector } from 'react-redux';
import { addFeed } from '../utils/feedSlice';
import UserCard from './UserCard';

const Feed = () => {
  const dispatch = useDispatch();
  const feed = useSelector((store) => store.feed);

  const feedData = async () => {
    try {
      const res = await axios.get(BASE_URL + "/feed", 
        {withCredentials: true}
      );
      dispatch(addFeed(res.data));
    }catch(err) {
      console.log(err);
    }
  }

  useEffect(() => {
    feedData();
  }, []);


  if(!feed) return;

  if(feed.length <= 0) return <h1 className='text-center my-10 font-bold text-2xl'>No new User found!!</h1>;
  
  return feed && (
    <div>
     <UserCard user={feed[0]} />
    </div>
  )
}

export default Feed
