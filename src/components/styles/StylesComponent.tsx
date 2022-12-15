import { StyleSheet } from 'react-native';

export const StylesComponent = StyleSheet.create({
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
  logo: {
    width: 144,
    height: 144,
  },
  avatar: {
    width: 144,
    height: 144,
    borderRadius: 50,
  },
  containerMovement: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    padding: 8,
  },
  detailText: {
    color: '#000',
    fontSize: 20,
  },
  dateText: {
    color: '#000',
    fontSize: 15,
  },
  valueText: {
    color: 'green',
    fontSize: 20,
  },

  containerAvatar: {
    height: 150,
    margin: 20,
    alignItems: 'center',
  },
  containerAvatarText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 20,
    padding: 10,
  },
  containerToucheable: {
    marginTop: 20,
    height: 300,
  },
  containerButton: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginLeft: 5,
    padding: 10,
    marginTop: 15,
  },
  containerButtonText: {
    flex: 1,
    fontFamily: 'Roboto',
    marginLeft: 18,
    fontSize: 18,
    fontWeight: '600',
    color: '#000000',
    opacity: 0.5,
    letterSpacing: 0.7,
  },
  containerAvatarFooter: {
    margin: 20,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  containerLine: {
    padding: 8,
    borderColor: '#D3D3D3',
    borderBottomWidth: 1,
  },
});
