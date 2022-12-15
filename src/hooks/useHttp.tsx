import React, { useDispatch } from 'react-redux';
import { setClient, setAccount } from '../redux/slice/ClientSlice';
const useHttp = () => {
  const dispatch = useDispatch();
  const post = async (payload: any) => {
    try {
      let req = await fetch('http://192.168.1.6:3000/api/v1/client', {
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

  const getClient = async (email: string) => {
    try {
      let req = await fetch('http://192.168.1.6:3000/api/v1/client/' + email, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      });

      const json = await req.json();
      dispatch(setClient(json));
      return json;
    } catch (err: any) {
      console.log('Http post method err', err);
    }
  };

  const getAccountById = async (id: string) => {
    try {
      let req = await fetch('http://192.168.1.6:3000/api/v1/account/' + id, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      });

      const json = await req.json();
      
      dispatch(setAccount(json));
      return json;
    } catch (err: any) {
      console.log('Http post method err', err);
    }
  };

  return {
    post,
    getClient,
    getAccountById
  };
};

export default useHttp;
