import route from './routes'

export default function config ($httpProvider, $routeProvider, $locationProvider) {
  $locationProvider.html5Mode(true)
  route($routeProvider)
}
