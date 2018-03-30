"use strict";

import countries from "./countries.json";

/**
 * Sync Controller. Controller gérant la synchronisation
 */
export default function syncController($scope, databaseService) {

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
        databaseService.get('data').getTable('countries').count(number =>
            $scope.$apply(() => $scope.numberInDatabase = number));
        $scope.numberInProvider = countries.length;
    };

    /**
     * Run a sync beetween our countries provider and our local database
     */
    $scope.sync = () => {
        let table = databaseService.get('data').getTable('countries');
        table.clear()
            .then(() => table.bulkAdd(countries))
            .then(() => $scope.refreshCounter());
    }

}