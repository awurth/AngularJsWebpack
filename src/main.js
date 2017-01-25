import angular from 'angular'
import resource from 'angular-resource'
import router from 'angular-route'

import config from './config'
import HomeController from './home/home.controller'

export default angular.module('app', [resource, router])
.config(['$httpProvider', '$routeProvider', '$locationProvider', config])
.controller('HomeCtrl', HomeController)
