#!/bin/bash

API="http://localhost:4741"
URL_PATH="/sign-up"

curl 'https://tic-tac-toe-api-production.herokuapp.com/sign-up' \
--include \
--request POST \
--header "Content-Type: application/json" \
--data '{
  "credentials": {
    "email": "'"${EMAIL}"'",
    "password": "'"${PASSWORD}"'",
    "password_confirmation": "'"${PASSWORD}"'"
  }
}'
