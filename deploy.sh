#! /bin/sh

if [ "$1" != "dev" ] && [ "$1" != "production" ]
then
  echo "Usage: $0 <dev|production>"
  exit
fi

cp firebase.json.$1 firebase.json
firebase use $1
firebase deploy
rm firebase.json