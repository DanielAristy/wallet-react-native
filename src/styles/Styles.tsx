import { StyleSheet } from 'react-native';

export const Styles = StyleSheet.create({
  welcomeContainer: {
    height: '100%',
  },
  welcomeContainerAvatar: {
    height: '60%',
    paddingBottom: '10%',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  welcomeContainerText: {
    height: '40%',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  textWelcome: {
    padding: 20,
    fontSize: 25,
    marginTop: '40%',
    color: '#000',
  },

  authContainer: {
    height: '100%',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  authContainerLogo: {
    alignItems: 'center',
    height: '33.3%',
    width: '100%',
    justifyContent: 'flex-end',
    paddingBottom: 10,
  },
  authContainerLogoText: {
    flexDirection: 'row',
  },

  authContainerLogoTextBlack: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 22,
    letterSpacing: 2,
    marginRight: 10,
  },
  authContainerLogoTextPurple: {
    fontWeight: 'bold',
    fontSize: 22,
    letterSpacing: 2,
    marginRight: 10,
    color: 'purple',
  },
  authContainerInputs: {
    height: '33.3%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  input: {
    height: 40,
    width: 300,
    paddingTop: 10,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
  },
  authContainerTextLogin: {
    color: 'black',
    marginBottom: 15,
  },
  authContainerButtonLine: {
    width: 100,
    padding: 8,
    borderColor: '#D3D3D3',
    borderBottomWidth: 1,
  },
  authContainerButtonRegister: {
    height: '33.3%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
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
    justifyContent: 'center',
    backgroundColor: 'blue',
    borderBottomEndRadius: 150,
    paddingLeft: 30,
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
