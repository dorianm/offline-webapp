"use strict";

/**
 * Manage online status
 */
class Network {
    /**
     * Ctor.
     *
     * @param $log Logger AngularJS
     * @param $rootScope Root scope AngularJS
     */
    constructor($log, $rootScope) {
        this.$log = $log;
        this.$rootScope = $rootScope;
        this._online = navigator.onLine;
        window.addEventListener("offline", () => this.setOnlineStatus());
        window.addEventListener("online", () => this.setOnlineStatus());
    }

    /**
     * Define the online status
     */
    setOnlineStatus() {
        this._online = navigator.onLine;
        this.$rootScope.$apply();
        this.$log.info(`The navigator is now ${this._online ? 'online' : 'offline'}`);
    }

    /**
     * Return true if the navigator is online
     *
     * @returns {boolean | *}
     */
    isOnline() {
        return this._online;
    }
}

Network.$inject = ['$log', '$rootScope'];

export default Network;