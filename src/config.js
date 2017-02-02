import route from './routes'

export default function config ($httpProvider, $routeProvider, $locationProvider) {
  // $locationProvider.html5Mode(true)

  $httpProvider.interceptors.push(['AuthService', (AuthService) => {
    return {
      request: (config) => {
        let token = AuthService.getToken()
        if (token != null) {
          config.headers.authorization = 'Bearer ' + token
        }

        return config
      }
    }
  }])

  route($routeProvider)
}

config.$inject = ['$httpProvider', '$routeProvider', '$locationProvider']
