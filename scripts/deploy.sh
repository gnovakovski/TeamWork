#!/bin/bash
CommitMessage=new-release # variable for the message of deploy commit

if [ $# -eq 1 ] # if has passed an argument
then
	$CommitMessage=$1 # use the first argument as commit message
fi

echo "NODE_ENV=production" > .env
npm run build
git checkout .env

cd ../Team1772.github.io
find . | grep -vi /.git | grep -v --regexp="^\.$" | xargs rm -rf

cp ../TeamWork/dist/index.html ./index.html
cp ../TeamWork/dist/service-worker.js ./service-worker.js
cp -r ../TeamWork/dist/static ./static

git add -A
git commit -m "${CommitMessage}"
git push origin master

cd ../TeamWork
clear
