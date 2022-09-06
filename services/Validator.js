export default class Validator {
  static notEmpty(fields) {
    if (
      Object.values(fields).some(
        (x) => x === null || x === '' || x === undefined
      )
    ) {
      return false
    } else {
      return true
    }
  }
}
