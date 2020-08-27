#!/bin/bash

API="http://localhost:4741"
URL_PATH="/games"

curl 'https://tic-tac-toe-api-development.herokuapp.com/games' \
--include \
--request POST \
--header "Authorization: Token token="${TOKEN}"" \
--header "Content-Type: application/json" \
--data '{}'
