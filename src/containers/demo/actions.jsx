function fetchInfo(params, options = {}) {
  return {
    type: 'Demo/FETCH_INFO',
    payload: {
      url: '/demo',
      postBody: params,
      options
    }
  }
}

export default {
  fetchInfo,
}
