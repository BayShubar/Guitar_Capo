import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Button } from 'react-native-elements'
import { connect } from 'react-redux'
import { openChordModel } from '../actions'

class ViewChordButton extends React.Component{

  render(){
    return(
        <View style={ this.props.style }>
          <Button
            raised
            icon = {{ name: 'library-music' }}
            title = "See Pure Result"
            backgroundColor = '#F2AE72'
            onPress = { ()=> this.props.openChordModel() }
          />
        </View>
    )
  }
}


export default connect(null, { openChordModel })(ViewChordButton);
