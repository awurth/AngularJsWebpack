
export default class AuthService {
  constructor ($window, User) {
    this.$window = $window
    this.User = User
  }

  check () {
    return this.getToken() != null
  }

  login (credentials) {
    return this.User.login(credentials, (user) => {
      this.setToken(user.token)
    }).$promise
  }

  register (credentials) {
    return this.User.register(credentials).$promise
  }

  logout () {
    // User.signout()
    this.removeToken()
  }

  setToken (token) {
    this.$window.localStorage.setItem('token_date', Date.now())
    this.$window.localStorage.setItem('token', token)
  }

  getToken () {
    let date = this.$window.localStorage.getItem('token_date')

    // On teste la validité du token
    // Si la dernière requête était il y a plus de 30 min (1800000 ms)
    // on supprime le token, sinon on actualise la date
    if (date && Date.now() - parseInt(date) > 1800000) {
      this.$window.localStorage.removeItem('token')
    } else {
      this.$window.localStorage.setItem('token_date', Date.now())
    }

    return this.$window.localStorage.getItem('token')
  }

  removeToken () {
    this.$window.localStorage.removeItem('token')
  }
}

AuthService.$inject = ['$window', 'User']
