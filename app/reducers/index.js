import { combineReducers } from 'redux'
import keys from './keys_reducer'
import selectedValues from './selections_reducer'
import modalValues from './modal_reducer'

export default combineReducers({
  keys, selectedValues,modalValues,
});
