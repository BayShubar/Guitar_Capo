import * as types from '../actions/Types'

const INITIAL_STATE = {
  selectedKeyIndex: 0,
  selectedCapo: 7,
  capoKeyIndex: 7,
}

export default ( state = INITIAL_STATE, action )=>{
  switch( action.type ){
    case types.SELECT_KEY_INDEX : {
      let capoKeyIndex = state.selectedCapo+action.payload;
      capoKeyIndex = capoKeyIndex % 12;
      return {
        ...state,
        selectedKeyIndex: action.payload,
        capoKeyIndex,
      }
    }
    case types.SELECT_CAPO :{
      let capoKeyIndex = state.selectedKeyIndex + action.payload;
      capoKeyIndex = capoKeyIndex%12;
      return {
         ...state,
         selectedCapo: action.payload,
         capoKeyIndex,
       }
    }
    default :  return state;
  }
}
