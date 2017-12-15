import * as types from '../actions/Types'

export default ( state = { isOpen: false }, action )=>{
  if( action.type === types.CHORDS_MODAL ){
    let isOpen = state.isOpen ? false : true;
    console.log( "result", isOpen )
    return { isOpen:isOpen  }
  }
  return state;
}
