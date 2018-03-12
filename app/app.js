"use strict";

/**
 * Register the service worker (works only in HTTPS)
 */
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register(`/sw.${__VERSION__}.js`)
        .then((reg) => console.log(`Registration succeeded. Scope is ${reg.scope}`))
        .catch((err) => console.log(`Registration failed with ${err}`));
};

/**
 * Import the angular application
 */
import './js/ng-app';