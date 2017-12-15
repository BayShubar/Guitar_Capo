import React from 'react'
import { View , StyleSheet, Dimensions} from 'react-native'
import { connect } from 'react-redux'
import { Text } from  'react-native-elements'
import { GENERAL_STYLE, SCREEN_WIDTH } from '../constants'

class CapoKey extends React.Component{
  render(){
    const { selectedValues: {capoKeyIndex}, keys } = this.props;
    return(
      <View style = { styles.container }>
        <Text style={ styles.text }> Capo Key </Text>
        <Text style={ styles.text }> { keys[capoKeyIndex].key } </Text>
      </View>
    )
  }
}
const mapStateToProps = ({ selectedValues, keys })=>( { selectedValues, keys } );
export default connect(mapStateToProps)(CapoKey);

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    //height: 200,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'#542733',
    width: SCREEN_WIDTH*0.9,
    },
    text:{
      color:'#F2AE72',
      fontSize: 30,
    },
})
