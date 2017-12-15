import * as types from './Types'

export const selectKeyIndex = payload =>{
  return { type: types.SELECT_KEY_INDEX, payload }
}

export const selectCapo = payload =>{
  return { type: types.SELECT_CAPO, payload }
}
