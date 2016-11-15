// Javascript Entry Point
import angular from 'angular';

import { MainController } from "./MainController.js";

angular
.module('app', [])
.controller('MainController', MainController)
