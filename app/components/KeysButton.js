import React from 'react'
import { View, StyleSheet, Dimensions } from 'react-native'
import { Text, ButtonGroup } from 'react-native-elements'
import { connect } from 'react-redux'
import { selectKeyIndex } from '../actions/index'
import { GENERAL_STYLE, BUTTON_STYLE } from '../constants'

class KeysButton extends React.Component{

  render(){
    const { keys,  selectedValues: { selectedKeyIndex } } = this.props;
    const keyButtons = keys.map(( key )=> key.shortKey ? '/' : [key.key] );
    return(
      <View style={ GENERAL_STYLE.container }>
        <Text style={ GENERAL_STYLE.text } > Key</Text>
        <Text style={ GENERAL_STYLE.text } > { keys[selectedKeyIndex].key } </Text>
        <ButtonGroup
          selectedIndex={selectedKeyIndex}
          buttons={keyButtons}
          containerStyle={ BUTTON_STYLE.containerStyle }
          ButtonStyle = { BUTTON_STYLE.buttonStyle }
          selectedTextStyle = { BUTTON_STYLE.selectedTextStyle }
          onPress = { (index)=>{ this.props.selectKeyIndex(index) } }
        />
      </View>
    )
  }
}
const mapStateToProps = ({ keys, selectedValues })=>({ keys, selectedValues })
export default connect(mapStateToProps, { selectKeyIndex })(KeysButton);
