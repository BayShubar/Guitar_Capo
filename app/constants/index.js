import { Constants } from 'expo'
import { StyleSheet, Dimensions} from 'react-native'

export const STATUS_BAR_HEIGHT = 15;
export const MAIN_SCREEN_TITLE = 'GuitarFixer';


export const SCREEN_WIDTH = Dimensions.get('window').width;
export const SCREEN_HEIGHT = Dimensions.get('window').height;
export const MODAL_MARGIN = 0.07;
export const GENERAL_STYLE = StyleSheet.create({
  container: {
    flex: 1,
    //height: 200,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'#542733',
    borderBottomColor: '#F2AE72',
    borderBottomWidth: 2,
    width: SCREEN_WIDTH*0.9,
    },
    text:{
      color:'#F2AE72',
      fontSize: 30,
    },
})

export const BUTTON_STYLE = StyleSheet.create({
  containerStyle:{
    height: 40,
    width: SCREEN_WIDTH*0.9,
  },
  buttonStyle: {
    backgroundColor: 'white',
  },
  selectedTextStyle: {
    color: '#F2AE72',
    fontWeight: '900',
  }
});
