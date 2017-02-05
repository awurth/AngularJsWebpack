import angular from 'angular'
import resource from 'angular-resource'
import router from 'angular-ui-router'

import config from './config'
import JWTService from './authentication/jwt.service'
import AuthService from './authentication/authentication.service'
import User from './user/user'
import TopbarDirective from './topbar/topbar.directive'
import HomeController from './home/home.controller'

export default angular.module('app', [resource, router])
  .constant('API', {
    url: 'http://localhost:8080'
  })
  .factory('User', User)
  .service('JWTService', JWTService)
  .service('AuthService', AuthService)
  .config(config)
  .directive('topbar', TopbarDirective)
  .controller('HomeCtrl', HomeController)
