#!/bin/bash
CONFIG_COUNT=$(jq length templates.json)
for (( i=0; i<CONFIG_COUNT; i++ ))
do
  PROJECT_NAME=$(jq -r ".[$i].projectName" templates.json)
  echo "Cloning webshop-template into '$PROJECT_NAME'..."
  git clone https://github.com/gamma1210/webshop-template.git "$PROJECT_NAME"
  if [ $? -ne 0 ]; then
    echo "Error: Could not clone the repository."
    exit 1
  fi
  cd "$PROJECT_NAME" || exit
  rm -rf .git
  git init
  git add .
  git commit -m "Initial commit from webshop-template"
  npm install
  node configure.js $i
  cd ..
done