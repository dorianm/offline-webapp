"use strict";

/**
 * Root Controller. Controller attaché à la racine de l'application
 *
 * @param $rootScope
 */
export default function rootController($rootScope, $log, networkService) {

    /**
     * It true, the naviagtor is online
     *
     * @type {boolean}
     */
    $rootScope.online = networkService.isOnline();

    /**
     * Watch the online status (in the networkService service)
     */
    $rootScope.$watch(
        () => networkService.isOnline(),
        (value) => $rootScope.online = value,
        true);

}