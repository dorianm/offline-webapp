"use strict";

import DB_DATA from "./config/data";
import DB_SYNC from "./config/sync";

import Database from './Database';

/**
 * Hold many Database object
 */
class Databases {
    /**
     * Ctor.
     */
    constructor($log) {
        this.$log = $log;
        this.$log.info("Init databases object");
        this.db = {};
        this.db[DB_SYNC.name] = new Database(DB_SYNC, this.$log);
        this.db[DB_DATA.name] = new Database(DB_DATA, this.$log);
    }

    /**
     * Return a database
     *
     * @param databaseName
     * @returns {Database}
     */
    get(databaseName) {
        return this.db[databaseName];
    }

}

Databases.$inject = ['$log'];

export default Databases;