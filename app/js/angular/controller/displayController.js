"use strict";

import angular from 'angular';

/**
 * Root Controller. Controller attaché à la racine de l'application
 *
 * @param $rootScope
 */
function displayController($rootScope, $scope) {

    /**
     * Countries
     *
     * @type {Array}
     */
    $scope.countries = [];

    /**
     * Get all countries from DB
     */
    $scope.extractFromDb = () => {
        $scope.countries = [];
        $rootScope.db.get().countries.each(country => $scope.$apply(() => $scope.countries.push(country)));
    };

}

export default angular.module("displayController", [])
    .controller("displayController", displayController)
    .name;