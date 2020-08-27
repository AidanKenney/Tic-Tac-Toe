#!/bin/bash

API="http://localhost:4741"
URL_PATH="/sign-out"

curl 'https://tic-tac-toe-api-production.herokuapp.com/sign-out' \
--include \
--request DELETE \
--header "Authorization: Token token="${TOKEN}"" \
--header "Content-Type: application/json" \
--data '{}'
