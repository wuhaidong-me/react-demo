function fetchInfo(params, options = {}) {
  return {
    type: 'Home/FETCH_INFO',
    payload: {
      url: '/home',
      postBody: params,
      options
    }
  }
}

function setProps(params, options = {}) {
  return {
    type: 'Home/SET_PROPS',
    payload: params,
    options,
  }
}
export default {
  fetchInfo,
  setProps,
}
