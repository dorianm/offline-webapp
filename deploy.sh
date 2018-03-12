#!/bin/bash

# http-server (https://www.npmjs.com/package/http-server) is required to use this script :
# npm install http-server -g

PORT=8443
CERT="server.cert"
KEY="key.pkey"
FOLDER="dist/"

http-server -p $PORT --cors --ssl --cert "$CERT" --key "$KEY" "$FOLDER"
