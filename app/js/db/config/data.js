"use strict";

import Dexie from 'dexie';

/**
 * Database name
 *
 * @type {string}
 */
const DB_NAME = "data";

/**
 * Dexie Database
 *
 * @type {Dexie}
 */
export const DB = new Dexie(DB_NAME);

/**
 * Data database init function.
 *
 * See http://dexie.org/docs/Tutorial/Design#database-versioning for more information
 */
export const init = () => {
    DB.version(1).stores({
        countries: "code",
        pokemon: "id, name"
    });
};