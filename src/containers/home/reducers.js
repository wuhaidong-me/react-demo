import cloneDeep from 'lodash.clonedeep'

const initState = {
  info: {},
  reduxState: 'initial state'
}

export default function (state = initState, action) {
  switch (action.type) {
    case 'Home/FETCH_INFO__SUCCESS':
      return state
    case 'Home/SET_PROPS':
      state.reduxState = 'update state'
      return cloneDeep(state)
    default:
      return state
  }
}
