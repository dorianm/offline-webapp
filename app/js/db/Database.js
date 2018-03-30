"use strict";

/**
 * Import of Dexie, an IndexedDB wrapper
 */
import Dexie from 'dexie';

export default class Database {

    /**
     * Ctor.
     */
    constructor(db) {
        this.db = db;
        this.open();
    }

    /**
     * Open the database. Called in the constructor, no need to call it manually.
     */
    open() {
        this.db.open().catch(error => alert(`Error while opening the database ${this.db.name} : ${error}`));
    }

    /**
     * Return the dexie Database
     *
     * @type {Dexie} Dexie database
     */
    getDatabase() {
        return this.db;
    }

    /**
     * Return a Dexie table
     *
     * @param table
     * @returns {*}
     */
    getTable(table) {
        return this.db[table];
    }

}