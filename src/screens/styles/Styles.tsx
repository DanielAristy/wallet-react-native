import { StyleSheet } from 'react-native';

export const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: 'red',
    alignItems: 'center',
    paddingTop: '80%',
  },
  textWelcome: {
    padding: 20,
    fontSize: 25,
    marginTop: '40%',
    color: '#000',
  },

  containerLogin: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  input: {
    height: 40,
    width: 300,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    marginTop: 80,
  },
  textLogin: {
    marginTop: 120,
    color: 'black',
  },
  buttonBlue: {
    height: 40,
    width: 300,
    backgroundColor: 'blue',
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonWhite: {
    height: 40,
    width: 300,
    backgroundColor: 'white',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#D3D3D3',
    alignItems: 'center',
    justifyContent: 'space-around',
  },

  text: {
    fontSize: 20,
    color: '#fff',
    padding: 5,
  },
  textBlack: {
    fontSize: 20,
    color: '#000',
    padding: 5,
  },
});
