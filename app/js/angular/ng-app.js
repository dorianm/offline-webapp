"use strict";

import angular from 'angular';

import rootController from './controller/rootController';
import syncController from './controller/sync/syncController';
import displayController from './controller/displayController';

angular.module("ngApp", [
    rootController,
    syncController,
    displayController
]);