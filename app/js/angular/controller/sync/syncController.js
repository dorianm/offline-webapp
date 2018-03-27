"use strict";

import angular from 'angular';
import countries from "./countries.json";

let syncControllerModule = angular.module("syncController", []).controller("syncController", syncController);

/**
 * Sync Controller. Controller gérant la synchronisation
 *
 * @param $rootScope Scope racine
 * @param $scope Scope du controller
 */
function syncController($rootScope, $scope) {

    /**
     * Number of countries available in our database;
     *
     * @type {number}
     */
    $scope.numberInDatabase = 0;

    /**
     * Number of countries available in our countries list. In real case, this could a be a REST web service for
     * example
     *
     * @type {number}
     */
    $scope.numberInProvider = 0;

    /**
     * Refesh the counters
     */
    $scope.refreshCounter = () => {
        $rootScope.db.get().countries.count(number => $scope.$apply(() => $scope.numberInDatabase = number));
        $scope.numberInProvider = countries.length;
    };

    /**
     * Run a sync beetween our countries provider and our local database
     */
    $scope.sync = () => {
        let table = $rootScope.db.get().countries;
        table.clear()
            .then(() => table.bulkAdd(countries))
            .then(() => $scope.refreshCounter());
    }

}

export default syncControllerModule;