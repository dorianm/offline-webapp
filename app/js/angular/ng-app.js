"use strict";

import angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import rootControllerModule from './controller/rootController.js';
import syncControllerModule from './controller/sync/syncController.js';
import displayControllerModule from './controller/displayController.js';

angular.module("ngApp", [
    uiRouter,
    rootControllerModule,
    syncControllerModule,
    displayControllerModule
]);