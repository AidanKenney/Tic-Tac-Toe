#!/bin/bash

API="http://localhost:4741"
URL_PATH="/sign-in"

curl 'https://tic-tac-toe-api-production.herokuapp.com/sign-in' \
--include \
--request POST \
--header "Content-Type: application/json" \
--data '{
  "credentials": {
    "email": "'"${EMAIL}"'",
    "password": "'"${PASSWORD}"'"
  }
}'
