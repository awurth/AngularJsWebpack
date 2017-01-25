
export default function route ($routeProvider) {
  $routeProvider.when('/', {
    template: require('./home/home.html'),
    controller: 'HomeCtrl'
  }).otherwise({ redirectTo: '/' })
}
