"use strict";

import angular from 'angular';
import DB from "./db/DB.js";
import countries from "./data/countries.json";

angular.module("dexieNgApp", [])
    .controller("rootController", ($rootScope) => {

        /**
         * Dexie DB
         *
         * @type {DB} Dexie Database
         */
        $rootScope.db = new DB();

        /**
         * It true, the naviagtor is online
         *
         * @type {boolean}
         */
        $rootScope.online = navigator.onLine;

        /**
         * Listen events to change the value of our "online" variable
         */
        window.addEventListener("offline", () => $rootScope.$apply(() => $rootScope.online = navigator.onLine));
        window.addEventListener("online", () => $rootScope.$apply(() => $rootScope.online = navigator.onLine));
    })
    .controller("syncController", ($rootScope, $scope) => {

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

    })
    .controller("displayController", ($rootScope, $scope) => {

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

    });