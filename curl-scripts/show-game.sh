#!/bin/bash

API="http://localhost:4741"
URL_PATH="/games"

curl 'https://tic-tac-toe-api-production.herokuapp.com/games/' + ${ID} \
--include \
--request GET \
--header "Content-Type: application/json"
git sty
