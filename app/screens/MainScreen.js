import React from 'react'
import { View, Text, StyleSheet, Platform, Image, ScrollView } from 'react-native'
import { STATUS_BAR_HEIGHT, MAIN_SCREEN_TITLE, SCREEN_WIDTH } from '../constants/index'
import icon from '../../assets/icon.png'

import KeysButton from '../components/KeysButton'
import CapoButtons from '../components/CapoButtons'
import CapoKey from '../components/CapoKey'
import ViewChordButton from '../components/ViewChordButton'
import ChordModal from '../modals/ChordModal'

class MainScreen extends React.Component{
  static navigationOptions = ()=>({
    title: MAIN_SCREEN_TITLE,
    headerStyle: {
      height: Platform.OS === 'android' ? 54 + STATUS_BAR_HEIGHT : 54,
      backgroundColor: '#F2AE72',
    },
    headerTitleStyle: {
      marginTop: Platform.OS === 'android' ? STATUS_BAR_HEIGHT : 0,
      color: '#542733',
    },
    headerLeft: <Image source = { icon }  style = { styles.iconStyle } />

  });
  render(){
    return(
      <View style={ { flex:1 } }>
        <ChordModal/>
        <View style={ styles.container }>
          <KeysButton />
          <CapoButtons />
          <CapoKey />
          <ViewChordButton style = { styles.ViewChordButtonStyle }/>
        </View>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor:'#542733',
  },
  iconStyle:{
    marginTop: 20,
    marginLeft: 10,
    width: 40,
    height: 40,
  },
  ViewChordButtonStyle:{
    width: SCREEN_WIDTH,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom:10,
  }
});



export default MainScreen;
