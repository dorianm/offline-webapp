"use strict";

import {init as initData, DB as DB_DATA} from "./config/data";
import {init as initSync, DB as DB_SYNC} from "./config/sync";

import Database from './Database';

export default class Databases {
    /**
     * Ctor.
     */
    constructor() {

        console.log("Init databases object");

        this.init();

        this.db = {};
        this.db[DB_SYNC.name] = new Database(DB_SYNC);
        this.db[DB_DATA.name] = new Database(DB_DATA);
    }

    /**
     * Init the database
     */
    init() {
        initSync();
        initData();
    }

    /**
     * Return a database
     *
     * @param databaseName
     * @returns {*}
     */
    get(databaseName) {
        return this.db[databaseName];
    }

}