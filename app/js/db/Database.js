"use strict";

/**
 * Database class, hold a Dexie database object
 */
export default class Database {

    /**
     * Ctor.
     */
    constructor(db, $log) {
        this.db = db;
        this.$log = $log;
        this.open();
    }

    /**
     * Open the database. Called in the constructor, no need to call it manually.
     */
    open() {
        this.db.open()
            .then(() => this.$log.info(`The database ${this.db.name} has been opened`))
            .catch(error => this.$log.error(`Error while opening the database ${this.db.name} : ${error}`));
    }

    /**
     * Return the dexie Database
     *
     * @type {Dexie} Dexie database
     */
    getDb() {
        return this.db;
    }

    /**
     * Return a Dexie table
     *
     * @param table
     * @returns {*}
     */
    get(table) {
        return this.db[table];
    }

}