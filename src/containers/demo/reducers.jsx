const initState = {
  info: {}
};

export default function (state = initState, action) {
  switch (action.type) {
    case 'Demo/FETCH_INFO__SUCCESS':
      return state
     default:
       return state
  }
}
