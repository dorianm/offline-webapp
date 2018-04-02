"use strict";

/**
 * Root Controller. Controller attaché à la racine de l'application
 *
 * @param $rootScope
 */
export default function rootController($rootScope) {

    /**
     * It true, the naviagtor is online
     *
     * @type {boolean}
     */
    $rootScope.online = navigator.onLine;

    /**
     * Change the online status stored in $rootScope
     */
    let changeOnlineStatus = () => $rootScope.$apply(() => $rootScope.online = navigator.onLine);

    /**
     * Listen events to change the value of our "online" variable
     */
    window.addEventListener("offline", changeOnlineStatus);
    window.addEventListener("online", changeOnlineStatus);

}