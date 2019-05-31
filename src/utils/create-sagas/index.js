import { call, put, takeEvery } from 'redux-saga/effects'
import _api from '../api'

function createSingleSaga(settings) {
  let defaultSettings = {
    method: 'post',
    type: '',
  }

  if (typeof settings === 'string') {
    settings = {
      ...defaultSettings,
      type: settings,
    }
  } else if (typeof settings === 'object') {
    settings = {
      ...defaultSettings,
      ...settings,
    }
  }

  return takeEvery(settings.type, function* (action) {
    let {
      callback,
      options,
    } = action.payload

    let finalOptions = {}
    if (typeof options === 'undefined' && typeof callback !== 'undefined') {
      options = callback
    }

    if (typeof options === 'function') {
      finalOptions.success = options
    } else if (typeof options === 'object') {
      finalOptions = {
        ...finalOptions,
        ...options,
      }
    }

    finalOptions.loading = finalOptions.loading !== false

    try {
      const response = yield call(_api[settings.method], action.payload.url, action.payload.postBody, finalOptions)
      yield put({ type: `${settings.type}__SUCCESS`, response })
      typeof finalOptions.success === 'function' && finalOptions.success(response)
    } catch (e) {
      yield put({ type: `${settings.type}__FAILED`, message: e.message })
      typeof finalOptions.fail === 'function' && finalOptions.fail()
      console.error(e)
    }
  })
}

function createSagas(actionTypeArray) {
  if (!Array.isArray(actionTypeArray)) {
    actionTypeArray = [actionTypeArray]
  }
  return actionTypeArray.map(e => createSingleSaga(e))
}

export default createSagas
