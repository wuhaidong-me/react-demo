export default class ErrorExtend extends Error {
  constructor(message, toastMsg) {
    super(message)
    if (typeof toastMsg === 'undefined') {
      toastMsg = message
    }
    this.toastMsg = toastMsg
  }
}
