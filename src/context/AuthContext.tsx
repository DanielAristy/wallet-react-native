import React, { useState, useEffect } from 'react';
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
  const [loading, useLoading] = useState(false);
  const [loggedIn, setLoggedIn] = useState<boolean>();
  const [userData, setUserData] = useState<{
    name: string;
    picture: string;
    email: string;
  }>();
  const { post } = useHttp();

  const getUserData = async (id?: string) => {
    const idToken = id ? id : await SInfo.getItem('idToken', {});
    const { name, picture, email, exp } = jwtDecode<any>(idToken);

    if (exp < Date.now() / 1000) {
      throw new Error('ID token expired!');
    }

    return { name, picture, email };
  };

  useEffect(() => {
    (async () => {
      try {
        if (loggedIn) {
          const user_data = await getUserData();
          if (user_data) {
            setLoggedIn(true);
            setUserData(user_data);
          }
        }
      } catch (err) {
        Alert.alert('Error logging in');
      }
    })();
  }, [loggedIn]);

  const login = async () => {
    try {
      const credentials = await auth0.webAuth.authorize({
        scope: 'openid email profile',
      });
      await SInfo.setItem('idToken', credentials.idToken, {});
      const user_data = await getUserData(credentials.idToken);

      await post({
        fullName: user_data.name,
        email: user_data.email,
        phone: '3',
        photo: user_data.picture,
      });

      setLoggedIn(true);
      setUserData(user_data);
      useLoading(true);
    } catch (err) {
      Alert.alert('Error logging in');
    }
  };

  const logout = async () => {
    try {
      await auth0.webAuth.clearSession({});
      await SInfo.deleteItem('idToken', {});
      setLoggedIn(false);
      setUserData(undefined);
    } catch (err) {
      Alert.alert('Error logout');
    }
  };

  const value = {
    loading,
    loggedIn,
    login,
    logout,
    userData,
  };

  return (
    <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>
  );
};

const AuthContext = React.createContext<any>(null);

export { AuthContext, AuthContextProvider };
