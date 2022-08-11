export default class UserService {
  static async list() {
    const config = {
      headers: {
        Authorization: 'Bearer ' + window.sessionStorage.getItem('ifa-trip-tkn'),
      },
    }
    const response = await fetch(process.env.backUrl + '/users',config)
    const data = await response.json()
    return data
  }
}
