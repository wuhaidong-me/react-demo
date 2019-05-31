import objectToFormdata from 'object-to-formdata'
import config from '../../config'
import ErrorExtend from '../error-extend'
// TODO
// import Toast from '../../utils/toast'

function fetchWithTimeout(url, options, timeout = 30000) {
  return Promise.race([
    fetch(url, options),
    new Promise((resolve, reject) =>
      setTimeout(() => reject(new ErrorExtend('请求超时')), timeout)
    )
  ])
}

function oauthApi(url, options = {}, params = {}) {
  let defaultOptions = {
    credentials: 'include',
    method: 'GET',
  }

  let defaultParams = {
    timeout: 30000,
    loading: true,
    toast: true,
  }

  let finalOptions = {
    ...defaultOptions,
    ...options,
  }

  let finalParams = {
    ...defaultParams,
    ...params,
  }

  let finalUrl = config.API_ROOT + url

  // echo oauthApi log
  console.log(url, finalOptions, finalParams)

  if (finalParams.loading) {
    // Toast.loading()
  }

  return fetchWithTimeout(finalUrl, finalOptions, finalParams.timeout)
    .then((res) => res.json())
    .then((res = {}) => {
      // Toast.destory()
      if (res.code === 0) {
        return res.data
      } else {
        if (res.code === 401) {
          window.location.replace(res.data)
          throw new ErrorExtend('请先登录')
        } else if (res.code === 403) {
          alert('访问限制', '您目前没有访问的权限')
        } else {
          throw new ErrorExtend(res.msg)
        }
      }
    })
    .catch(function (error) {
      if (finalParams.toast) {
        // Toast.text(error.toastMsg ? error.toastMsg : '请求失败')
      }
      throw new ErrorExtend(`${finalOptions.method} ${url} Failed! ${error.message ? `(${error.message})` : ''}`)
    })
}

function get(url, params) {
  return oauthApi(url, {}, params)
}

function post(url, postBody, params) {
  return oauthApi(url, {
    method: 'POST',
    body: objectToFormdata(postBody),
  },
    params
  )
}

export default {
  get,
  post,
}
