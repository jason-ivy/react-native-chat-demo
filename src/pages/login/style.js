import { Dimensions, StyleSheet } from 'react-native';

const borderWidth = StyleSheet.hairlineWidth;
const { height, width } = Dimensions.get('window');

export default style = StyleSheet.create({
  content: {
      backgroundColor: '#fff',
      flex: 1,
      marginTop:height/2-150,
      padding:12
  },
  bottom: {
      padding:12
  },

  inputView: {
      backgroundColor: '#fff',
      flexDirection: 'row',
      paddingLeft: 9,
      paddingRight: 9,
      alignItems: 'center',
      borderBottomWidth: borderWidth,
      borderBottomColor: '#ccc',
      height: 41,
      borderLeftWidth: borderWidth,
      borderLeftColor: '#ccc',
      borderRightWidth: borderWidth,
      borderRightColor: '#ccc',
      borderTopWidth: borderWidth,
      borderTopColor:'#ccc'
  },
  inputLabel: {
      fontSize: 14,
      marginRight: 10
  },
  textViewStyle: {
      flex: 1,
      fontSize: 14,
      justifyContent: 'center'
  },
  buttonText: {
      color: '#fff'
  },
});