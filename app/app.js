"use strict";

/**
 * Register the service worker (works only in HTTPS)
 */
if ('serviceWorker' in navigator) {
//    navigator.serviceWorker.register(`/sw.${__VERSION__}.js`)
//        .then((reg) => console.log(`Registration succeeded. Scope is ${reg.scope}`))
//        .catch((err) => console.log(`Registration failed with ${err}`));
}

import angular from 'angular';
import Databases from './js/db/Databases';
import rootController from './js/ng/controller/rootController';
import syncController from './js/ng/controller/sync/syncController';
import displayController from './js/ng/controller/displayController';

angular.module("ngApp", [])
    .service('dbService', Databases)
    .controller('rootController', rootController)
    .controller('displayController', displayController)
    .controller('syncController', syncController);