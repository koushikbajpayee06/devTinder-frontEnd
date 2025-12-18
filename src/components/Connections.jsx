import axios from 'axios';
import React, { useEffect } from 'react';
import { BASE_URL } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { addConnections } from '../utils/connectionSlice';

const Connections = () => {

    const fetchConnections = async()=>{
        const dispatch = useDispatch()
        try{
            const res = await axios.get(BASE_URL + "/user/connections",{
                withCredentials:true,
            });
            console.log(res.data.data);
        }catch(err){
            console.log(err);
            dispatch(addConnections)
        }
    };

    useEffect(()=>{
        fetchConnections();
    },[]);
  return (
    <div className='flex justify-center my-10'>
      <h1 className='text-bold text-2xl '>Connections</h1>
    </div>
  )
}

export default Connections
