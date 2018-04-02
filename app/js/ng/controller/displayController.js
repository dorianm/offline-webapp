"use strict";

/**
 * Display Controller. Controller gérant l'affichage des informations
 */
export default function displayController($scope, dbService) {

    /**
     * Countries
     *
     * @type {Array}
     */
    $scope.countries = [];

    /**
     * Get all countries from Database
     */
    $scope.extractFromDb = () => {
        $scope.countries = [];
        dbService.get('data').get("countries").each(country => $scope.$apply(() => $scope.countries.push(country)));
    };

}