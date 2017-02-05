
export default function route ($stateProvider) {
  $stateProvider
    .state('home', {
      url: '/',
      template: require('./home/home.html'),
      controller: 'HomeCtrl'
    })
    .state('login', {
      url: '/login',
      template: require('./authentication/login.html')
    })
    .state('register', {
      url: '/register',
      template: require('./authentication/register.html')
    })
}
