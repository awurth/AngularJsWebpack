import angular from 'angular'
import resource from 'angular-resource'
import router from 'angular-route'

import config from './config'
import AuthService from './authentication/authentication.service'
import User from './user/user'
import HomeController from './home/home.controller'

export default angular.module('app', [resource, router])
.constant('API', {
  url: 'http://localhost:8080'
})
.factory('User', User)
.service('AuthService', AuthService)
.config(config)
.controller('HomeCtrl', HomeController)
