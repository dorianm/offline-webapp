"use strict";

/**
 * Display Controller. Controller gérant l'affichage des informations
 */
export default function displayController($scope, databaseService) {

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
        databaseService.get('data').getTable("countries").each(country =>
            $scope.$apply(() => $scope.countries.push(country))
        );
    };

}