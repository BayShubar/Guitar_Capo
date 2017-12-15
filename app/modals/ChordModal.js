import React from 'react'
import { connect } from 'react-redux'
import { View, StyleSheet, Modal } from 'react-native'
import { Text, ButtonGroup, Button } from 'react-native-elements'
import { openChordModel } from '../actions'
import { SCREEN_HEIGHT, SCREEN_WIDTH, MODAL_MARGIN } from '../constants'

class ChordModal extends React.Component{
  render(){
    const { selectedValues: { selectedKeyIndex, selectedCapo }, keys } = this.props;
    const items = [];
    keys.map(( key, index )=>{
      let tem_id = (index + 7)%12;
      let data = (
        <View style = { styles.contentRowStyles } key={ index }>
            <View style={ styles.itemContainer }>
              <Text style={ styles.itemStyle } >{key.key}</Text>
            </View>
            <View style={ styles.itemContainer }>
              <Text style={ styles.itemStyle }> => </Text>
            </View>
            <View style={ styles.itemContainer }>
              <Text style={ styles.itemStyle }>{ keys[tem_id].key }</Text>
            </View>
        </View>
      )
      items.push(data);
    })

    return(
        <Modal
        transparent
        animationType = { 'slide' }
        visible = { this.props.modalValues.isOpen }
        onRequestClose = { ()=> this.props.openChordModel() }
      >
        <View style={ styles.modalStyle }>
          <View style={ styles.containerStyle }>

            <View style={ styles.headerStyle }>
              <Text h4 style={{ color: 'white' }}>
                Chords Transition
              </Text>
            </View>

            <View style={ styles.contentStyle }>

              <View style = { styles.contentRowStyles }>
                <View style={ styles.itemContainer }>
                  <Text style={ styles.itemHeadStyle } >Key { keys[selectedKeyIndex].key }  </Text>
                </View>
                <View style={ styles.itemContainer }>
                  <Text style={ styles.itemHeadStyle }> => </Text>
                </View>
                <View style={ styles.itemContainer }>
                  <Text style={ styles.itemHeadStyle }>Capo { selectedCapo } Chords</Text>
                </View>
              </View>

              { items }


            </View>
            <View style = { styles.btnClose }>
              <Button
                raised
                icon = {{ name: 'close' }}
                title= 'Close'
                backgroundColor = '#F2AE72'
                onPress = { ()=> this.props.openChordModel() }
              />
            </View>
          </View>
        </View>
    </Modal>
    )
  }
}

const mapStateProps = ({ selectedValues, keys, modalValues })=>( { selectedValues, keys, modalValues } );
export default connect(mapStateProps, { openChordModel })(ChordModal);

const styles = StyleSheet.create({
  modalStyle:{
    flex:1,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  containerStyle:{
    flex:1,
    marginTop: SCREEN_HEIGHT * MODAL_MARGIN,
    marginBottom: SCREEN_HEIGHT * MODAL_MARGIN,
    marginLeft: SCREEN_WIDTH * MODAL_MARGIN ,
    marginRight: SCREEN_WIDTH * MODAL_MARGIN,
    backgroundColor: 'white',
    borderRadius: 10,
  },

  headerStyle:{
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F2AE72',
    borderRadius: 10,
  },
  contentStyle:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    marginBottom: 10,
  },
  contentRowStyles:{
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemContainer:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemHeadStyle:{
     fontWeight: '900',
     fontSize: 14,
     alignItems: 'center',
     fontSize: 14,
     textAlign: 'center',
     color: '#542733',
  },
  itemStyle:{
    alignItems: 'center',
    fontSize: 14,
    textAlign: 'center',
    color: '#542733',
  },
  btnClose:{
    paddingBottom: 10,
    borderRadius: 10,
  },
});
