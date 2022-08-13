export default class GeoApiService {
  static async login(data) {
    const result = await this.$axios.$post('/login', data)
    window.sessionStorage.setItem('ifa-trip-tkn', JSON.stringify(result))
  }
  static async logout() {
    const result = await this.$axios.$post('/logout')
    window.sessionStorage.removeItem('ifa-trip-tkn')
  }
}