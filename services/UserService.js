export default class UserService {
 static async list() {
    const response = await fetch(process.env.backUrl + '/users')
    const data = await response.json()
    return data
  }
}
