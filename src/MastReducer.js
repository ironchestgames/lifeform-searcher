
const mastReducer = function (state, action) {
  switch (action.type) {
    case 'SET_MAST_FREQUENCY':
      return {
        ...state,
        mast_frequency: action.payload.value,
      }

    default:
      return state
  }
}

export default mastReducer
