"use strict";

/**
 * Import of Dexie, an IndexedDB wrapper
 */
import Dexie from 'dexie';

/**
 * Database name
 *
 * @type {string}
 */
const DB_NAME = "db";

export default class DB {
    /**
     * Ctor.
     */
    constructor() {
        this.db = new Dexie(DB_NAME);
        this.init();
        this.open();
    }

    /**
     * Init the database
     */
    init() {
        // First version of DB, store countries
        this.db.version(1).stores({
            countries: "code"
        });
    }

    /**
     * Open the database. Called in the constructor, no need to call it manually.
     */
    open() {
        this.db.open().catch(error => alert(`Error while opening the database : ${error}`));
    }

    /**
     * Return the dexie DB
     *
     * See. http://dexie.org/docs/Tutorial/Design#database-versioning
     *
     * @type {Dexie} Dexie database
     */
    get() {
        return this.db;
    }

}