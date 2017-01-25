
export default function route ($routeProvider) {
  $routeProvider.when('/', {
    template: require('./home/home.html'),
    controller: 'HomeController'
  }).otherwise({ redirectTo: '/' })
}
