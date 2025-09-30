import axios from 'axios';
import React, { useEffect } from 'react'
import { BASE_URL } from '../constants';
import { useDispatch, useSelector } from 'react-redux';
import { addFeed } from '../utils/feedSlice';
import UserCard from './UserCard';

const Feed = () => {
  const dispatch = useDispatch();
  const feed= useSelector((store) => store.feed);
  console.log(feed)

  const feedData = async () => {
    try {
      const res = await axios.get(BASE_URL + "/feed", 
        {withCredentials: true}
      );
      console.log(res);
      dispatch(addFeed(res.data));
    }catch(err) {
      console.log(err);
    }
  }

  useEffect(() => {
    feedData();
  }, []);

  return feed && (
    <div>
     <UserCard user={feed[1]}/>
    </div>
  )
}

export default Feed
