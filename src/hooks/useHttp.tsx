import React, { useDispatch } from 'react-redux';
import { setClient } from '../redux/slice/ClientSlice';
const useHttp = () => {
  const dispatch = useDispatch();
  const post = async (payload: any) => {
    try {
      let req = await fetch('http://192.168.1.2:3000/api/v1/client', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });
      const json = await req.json();
      dispatch(setClient(json));
    } catch (err: any) {
      console.log('Http post method err', err);
    }
  };

  return {
    post,
  };
};

export default useHttp;
