import React, { useState } from 'react';
import SInfo from 'react-native-sensitive-info';
import Auth0 from 'react-native-auth0';
import jwtDecode from 'jwt-decode';
import { Alert } from 'react-native';
import useHttp from '../hooks/useHttp';

const auth0 = new Auth0({
  domain: 'dev-8ajrvjc0lwg03ab0.us.auth0.com',
  clientId: 'hmSNawyq4SmueepgUc2ajRmgwLsajJel',
});

const AuthContextProvider = (props: any) => {
  const [loggedIn, setLoggedIn] = useState<boolean>();
  const { post, getClient } = useHttp();

  const getUserData = async (id?: string, number?:string) => {
    const idToken = id ? id : await SInfo.getItem('idToken', {});
    const { name, picture, email, exp } = jwtDecode<any>(idToken);

    const clientData = await getClient(email);

    if (!clientData || clientData.statusCode === 404) {
      console.log('Entro a crear el client');
      await post({
        fullName: name,
        email: email,
        phone: '2',
        photo: picture,
      });
    }

    if (exp < Date.now() / 1000) {
      throw new Error('ID token expired!');
    }
  };

  const login = async (number: string) => {
    console.log(number);

    try {
      const credentials = await auth0.webAuth.authorize({
        scope: 'openid email profile',
      });
      await SInfo.setItem('idToken', credentials.idToken, {});
      await getUserData(credentials.idToken, number);

      setLoggedIn(true);
    } catch (err) {
      Alert.alert('Error logging in');
    }
  };

  const logout = async () => {
    try {
      await auth0.webAuth.clearSession({});
      await SInfo.deleteItem('idToken', {});
      setLoggedIn(false);
    } catch (err) {
      Alert.alert('Error logout');
    }
  };

  const value = {
    loggedIn,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>
  );
};

const AuthContext = React.createContext<any>(null);

export { AuthContext, AuthContextProvider };
