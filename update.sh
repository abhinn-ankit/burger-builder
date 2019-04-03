#!/bin/bash

if [[ -z "$1" ]]
then
    echo "usage ./update.sh <commit message> <optional: true (to push to a new branch)>"
fi

echo -e "Adding files:\n"
git add --all

echo -e "Committing changes to local.\n"
git commit -m "$1"

echo -e "Pushing repo.\n"
if [[ -z "$2" ]]
then
    branch_name=$(git branch | grep \* | cut -d ' ' -f2)
    git push -u origin $branch_name
else
    git push
fi
