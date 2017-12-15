import React from 'react'
import { connect } from 'react-redux'
import { View, StyleSheet, Dimensions } from 'react-native'
import { Text, ButtonGroup } from 'react-native-elements'
import { selectCapo } from '../actions'
import { GENERAL_STYLE, BUTTON_STYLE } from '../constants'

const CAPO_BUTTONS = [' 1','2','3','4','5','6','7','8','9','10','11'];
class CapoButton extends React.Component{
  render(){
    const { selectedValues:{selectedCapo} } = this.props;
    return(
      <View style={ GENERAL_STYLE.container }>
        <Text style={ GENERAL_STYLE.text } > Capo </Text>
        <Text style={ GENERAL_STYLE.text } > { selectedCapo }</Text>
        <ButtonGroup
          selectedIndex={selectedCapo -1}
          buttons={CAPO_BUTTONS}
          containerStyle={ BUTTON_STYLE.containerStyle }
          ButtonStyle = { BUTTON_STYLE.buttonStyle }
          selectedTextStyle = { BUTTON_STYLE.selectedTextStyle }
          onPress = { (index)=>{ this.props.selectCapo(index+1) } }
        />
      </View>
    )
  }
}

const mapStateProps = ({ selectedValues })=>( { selectedValues } );
export default connect(mapStateProps, { selectCapo })(CapoButton);
