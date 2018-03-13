# Offline web application

## What is it

This project is a minimal webapp which works offline. To allow this, it uses [Service Worker](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API) and [Dexie](http://dexie.org/) (an [IndexedDB](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API) wrapper). 

Technologies used : 

- NPM
- Webpack
- AngularJS
- Dexie (IndexedDB)
- Service Worker

## How to build it

Get the dependencies with NPM :

```shell
npm install
```

And then run Webpack (see [package.json](./package.json) scripts) :

```shell
npm run build 
``` 

## How to deploy it


First of all, you will need an HTTPS server (because the Service Worker need it to works), so we need a SSL certificate, you can generate one with the following command line :

```shell
openssl req -new -x509 -keyout key.pkey -out server.cert -days 365 -nodes
```


Install the ```http-server``` npm package to use the [deploy.sh](./deploy.sh) script :

```shell
npm install http-server -g
```

And to finish, run the [deploy.sh](./deploy.sh) script : 

```shell
./deploy.sh
```

The webapp is now available at [https://127.0.0.1:8443](https://127.0.0.1:8443).

**Note**: Even when you trust your self signed SSL certificate (in Keychain Access on macOS for example), service worker registration fails in Chrome with the error ```net::ERR_CERT_COMMON_NAME_INVALID``` (in JS Console). It works in Firefox but if you want to use it in Chrome, you can take a loot at [this thread](https://github.com/webpack/webpack-dev-server/issues/854)


## Note

The country list [countries.json](app/js/data/countries.json) is coming from the [country-list project](https://github.com/fannarsh/country-list/).

