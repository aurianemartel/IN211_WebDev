#!/bin/bash

ids=$(curl -s http://localhost:8080/api/movies/ | jq -r '.movies[].id')

for id in $ids; do
  curl -X DELETE http://localhost:8080/api/movies/$id
  echo
done



