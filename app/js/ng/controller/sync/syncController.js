"use strict";

import countries from "./countries.json";

/**
 * Sync Controller. Controller gérant la synchronisation
 */
export default function syncController($scope, dbService) {

    /**
     * DB used to store data
     */
    let dbTable = dbService.get('data').get('countries');

    /**
     * Number of countries available in our database;
     *
     * @type {number}
     */
    $scope.numberInDatabase = 0;

    /**
     * Refesh the counters
     */
    $scope.refreshCounter = () => {
        dbTable.count(number => $scope.$apply(() => $scope.numberInDatabase = number));
    };

    /**
     * Run a sync beetween our countries provider and our local database
     */
    $scope.sync = () => {
        dbTable.clear()
            .then(() => dbTable.bulkAdd(countries))
            .then(() => $scope.refreshCounter());
    }

}