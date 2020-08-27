#!/bin/bash

API="http://localhost:4741"
URL_PATH="/change-password"

curl 'https://tic-tac-toe-api-production.herokuapp.com/change-password' \
--include \
--request PATCH \
--header "Authorization: Token token="${TOKEN}"" \
--header "Content-Type: application/json" \
--data '{
  "passwords": {
    "old": "'"${OLD}"'",
    "new": "'"${NEW}"'"
  }
}'
