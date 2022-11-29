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

  authContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
  },

  authContainerText: {
    flexDirection: 'row',
  },

  authContainerTextBlack: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 22,
    letterSpacing: 2,
    marginRight: 10,
  },
  authContainerTextPurple: {
    fontWeight: 'bold',
    fontSize: 22,
    letterSpacing: 2,
    marginRight: 10,
    color: 'purple',
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
  authContainerTextLogin: {
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
    flexDirection: 'row',
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

  changePasswordContainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  changePasswordTextInput: {
    height: 40,
    width: 300,
    margin: 12,
    backgroundColor: '#D3D3D3',
    opacity: 0.5,
    borderBottomWidth: 1,
    padding: 10,
  },
  accountScreenContainer: {
    height: '100%',
    backgroundColor: 'white',
  },

  accountScreenContainerAccout: {
    height: '30%',
  },

  accountScreenContainerBalance: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'blue',
  },
  accountScreenContainerBalanceValue: {
    color: '#fff',
    fontSize: 50,
  },
  accountScreenContainerBalanceText: {
    color: '#fff',
    marginTop: 5,
  },
  accountScreenContainerFlatList: {
    height: '70%',
  },
});
